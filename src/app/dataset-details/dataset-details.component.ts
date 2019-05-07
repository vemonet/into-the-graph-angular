import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSort } from '@angular/material';

import { DatasetsInfoService } from '../../datasets-info.service';
import { SparqlService } from '../../sparql.service';

@Component({
  selector: 'app-dataset-details',
  templateUrl: './dataset-details.component.html',
  styleUrls: ['./dataset-details.component.scss'],
})
export class DatasetDetailsComponent implements OnInit {

  displayedColumns = [];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.sort = ms;
    this.datasetsInfo.datasetSelected.relationsTableDataSource.sort = this.sort;
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private sparql: SparqlService,
    private datasetsInfo: DatasetsInfoService) { }

  columnNames = [
    { id: 'classCount1', value: '# of class 1' },
    { id: 'class1', value: 'Class 1' },
    { id: 'relationWith', value: 'Have relation with' },
    { id: 'class2', value: 'Class 2' },
    { id: 'classCount2', value: '# of class 2' }];

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.displayedColumns = this.columnNames.map(x => x.id);
    console.log('before ngOnInit dataset-detail. datasetsInfo:');
    const navigatedData = this.router.getNavigatedData();
    if (navigatedData == null) {
      // Execute SPARQL query to get datasets infos
      console.log('no navigatedData. execute sparql');
      this.sparql.getAllDatasetsInfo(null, this, this.route.snapshot.paramMap.get('datasetId'));
    } else {
      // Get datasets infos from data passed through router
      this.datasetsInfo.hashAll = navigatedData.hashAll;
      this.datasetsInfo.datasets = navigatedData.datasets;
      this.datasetsInfo.datasetSelected = navigatedData.datasetSelected;
      this.datasetsInfo.arrayDatasetsNav = navigatedData.arrayDatasetsNav;
      this.datasetsInfo.filteredArrayDatasetsNav = navigatedData.filteredArrayDatasetsNav;
    }
    console.log('after ngOnInit dataset-detail. datasetsInfo:')
    console.log(this.datasetsInfo);
  }

  applyFilterRelationsTable(filterValue: string) {
    this.datasetsInfo.datasetSelected.relationsTableDataSource.filter = filterValue.trim().toLowerCase();
  }
}
