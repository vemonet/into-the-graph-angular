import { Component, OnInit, ViewChild, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSort } from '@angular/material';

import { NgxGraphModule } from '@swimlane/ngx-graph';
import * as shape from 'd3-shape';

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

  // ngx-graph
  hierarchialGraph = {nodes: [], links: []}
  curve = shape.curveBundle.beta(1);

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

  //ngAfterViewInit() {
  ngOnInit() {
    this.displayedColumns = this.columnNames.map(x => x.id);
    console.log('before ngOnInit dataset-detail. datasetsInfo:');
    const navigatedData = this.router.getNavigatedData();
    if (navigatedData == null) {
      // Execute SPARQL query to get datasets infos
      console.log('no navigatedData. execute sparql');
      this.sparql.getAllDatasetsInfo(null, this, this.route.snapshot.paramMap.get('datasetId'));
    } else {
      // Get datasets infos from data passed through router
      this.datasetsInfo = navigatedData;
    }
    if (this.datasetsInfo.datasetSelected !== undefined) {
      this.datasetsInfo.datasetSelected.relationsTableDataSource.sort = this.sort;
      console.log('ngOnInit dataset-details: datasetSelected.relationsTableDataSource sorted');
    } else {
      console.log('ngOnInit dataset-details: datasetSelected undefined');
    }
    console.log('after ngOnInit dataset-detail. datasetsInfo:')
    console.log(this.datasetsInfo);
    this.showGraph();
  }

  showGraph() {
    this.hierarchialGraph.nodes = [
    {
      id: 'start',
      label: 'scan',
      position: 'x0'
    }, {
      id: '1',
      label: 'Event#a',
      position: 'x1'
    }, {
      id: '2',
      label: 'Event#x',
      position: 'x2'
    }, {
      id: '3',
      label: 'Event#b',
      position: 'x3'
    }, {
      id: '4',
      label: 'Event#c',
      position: 'x4'
    }, {
      id: '5',
      label: 'Event#y',
      position: 'x5'
    }, {
      id: '6',
      label: 'Event#z',
      position: 'x6'
    }
    ];

    this.hierarchialGraph.links = [
    {
      source: 'start',
      target: '1',
      label: 'Process#1'
    }, {
      source: 'start',
      target: '2',
      label: 'Process#2'
    }, {
      source: '1',
      target: '3',
      label: 'Process#3'
    }, {
      source: '2',
      target: '4',
      label: 'Process#4'
    }, {
      source: '2',
      target: '6',
      label: 'Process#6'
    }, {
      source: '3',
      target: '5'
    }
    ];

  }

  applyFilterRelationsTable(filterValue: string) {
    this.datasetsInfo.datasetSelected.relationsTableDataSource.filter = filterValue.trim().toLowerCase();
  }
}
