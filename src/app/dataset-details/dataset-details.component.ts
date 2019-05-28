import { Component, OnInit, ViewChild } from '@angular/core';
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
  }

  graphData = {
      nodes: [
          {data: {id: 'j', name: 'Jerry', faveColor: '#6FB1FC', faveShape: 'triangle'}},
          {data: {id: 'e', name: 'Elaine', faveColor: '#EDA1ED', faveShape: 'ellipse'}},
          {data: {id: 'k', name: 'Kramer', faveColor: '#86B342', faveShape: 'octagon'}},
          {data: {id: 'g', name: 'George', faveColor: '#F5A45D', faveShape: 'rectangle'}}
      ],
      edges: [
          {data: {source: 'j', target: 'e', faveColor: '#6FB1FC'}},
          {data: {source: 'j', target: 'k', faveColor: '#6FB1FC'}},
          {data: {source: 'j', target: 'g', faveColor: '#6FB1FC'}},
          {data: {source: 'e', target: 'j', faveColor: '#EDA1ED'}},
          {data: {source: 'e', target: 'k', faveColor: '#EDA1ED'}},
          {data: {source: 'k', target: 'j', faveColor: '#86B342'}},
          {data: {source: 'k', target: 'e', faveColor: '#86B342'}},
          {data: {source: 'k', target: 'g', faveColor: '#86B342'}},
          {data: {source: 'g', target: 'j', faveColor: '#F5A45D'}}
      ]
  };


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private sparql: SparqlService,
    private datasetsInfo: DatasetsInfoService) { }

  columnNames = [
    { id: 'classCount1', value: '# of instance of subject' },
    { id: 'class1', value: 'Subject class' },
    { id: 'relationWith', value: 'Have relation with' },
    { id: 'class2', value: 'Object class' },
    { id: 'classCount2', value: '# of instance of object' }];

  ngOnInit() {
    this.displayedColumns = this.columnNames.map(x => x.id);
    console.log('before ngOnInit dataset-detail. getNavigatedData:');
    // Trying to get data through the router to avoid doing useless calls:
    // this.route
    //   .data
    //   .subscribe(v => this.datasetsInfo = v.datasetsInfo);
    // const navigatedData = this.router.getNavigatedData();
    // console.log(navigatedData);
    // if (navigatedData == null) {
    //   // Execute SPARQL query to get datasets infos
    //   console.log('no navigatedData. execute sparql');
    //   this.sparql.getAllDatasetsInfo(null, this, this.route.snapshot.paramMap.get('datasetId'));
    // } else {
    //   // Get datasets infos from data passed through router
    //   this.datasetsInfo = navigatedData;
    // }
    this.sparql.getAllDatasetsInfo(null, this, this.route.snapshot.paramMap.get('datasetId'));
    if (this.datasetsInfo.datasetSelected !== undefined) {
      this.datasetsInfo.datasetSelected.relationsTableDataSource.sort = this.sort;
      console.log('ngOnInit dataset-details: datasetSelected.relationsTableDataSource sorted');
    } else {
      console.log('ngOnInit dataset-details: datasetSelected undefined');
    }
    console.log('after ngOnInit dataset-detail. datasetsInfo:')
    console.log(this.datasetsInfo);
  }

  applyFilterRelationsTable(filterValue: string) {
    this.datasetsInfo.datasetSelected.relationsTableDataSource.filter = filterValue.trim().toLowerCase();
  }
}
