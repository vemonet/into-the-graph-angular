import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material';

import { DatasetsInfoService } from '../../datasets-info.service';
import { SparqlService } from '../../sparql.service';

@Component({
  selector: 'app-datasets-overview',
  templateUrl: './datasets-overview.component.html',
  styleUrls: ['./datasets-overview.component.scss'],
})
export class DatasetsOverviewComponent implements OnInit {

  displayedColumns = [];
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private sparql: SparqlService,
    private datasetsInfo: DatasetsInfoService) { }

  columnNames = [
    { id: 'datasetId', value: 'Dataset' }, 
    { id: 'dateGenerated', value: 'Date generated' },
    { id: 'triples', value: '# of triples' },
    { id: 'entities', value: '# of entities' },
    { id: 'properties', value: '# of properties' },
    { id: 'classes', value: '# of classes' }];

  ngOnInit() {
    this.displayedColumns = this.columnNames.map(x => x.id);
    this.datasetsInfo.datasetSelected = null;
    this.sparql.getAllDatasetsInfo(this, null, null);
  }

  applyFilterTable(filterValue: string) {
    this.datasetsInfo.datasetsTableDataSource.filter = filterValue.trim().toLowerCase();
  }
}

export interface Element {
  datasetId: string;
  dateGenerated: string;
  triples: number;
  entities: number;
  properties: number;
  classes: number;
}
