import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
// TODO: remove? import { DataSource } from '@angular/cdk/table';
// TODO: create a service to perform SPARQL queries?
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

import { SparqlService } from '../../sparql.service';
import { DatasetsInfoService } from '../../datasets-info.service';

@Component({
  selector: 'app-datasets-overview',
  templateUrl: './datasets-overview.component.html',
  styleUrls: ['./datasets-overview.component.scss'],
})
export class DatasetsOverviewComponent implements OnInit {

  dataSource;
  displayedColumns = [];
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private router: Router,
    private sparql: SparqlService,
    private datasetsInfo: DatasetsInfoService) { }

  /**
   * Pre-defined columns list for user table
   */
  columnNames = [
    { id: 'datasetId', value: 'Dataset' }, 
    { id: 'dateGenerated', value: 'Date generated' },
    { id: 'triples', value: '# of triples' },
    { id: 'entities', value: '# of entities' },
    { id: 'properties', value: '# of properties' },
    { id: 'classes', value: '# of classes' }];

  ngOnInit() {
    this.displayedColumns = this.columnNames.map(x => x.id);
    this.createTable();
  }

  navigateTo(row: any) {
    console.log(row);
    this.router.navigate(['/dataset/' + row.datasetId]);
  }

  createTable() {
    this.datasetsInfo.datasets = this.sparql.getAllDatasets();
    const tableArr: Element[] = [];
    for (const sparqlDatasetResult of this.datasetsInfo.datasets) {
        console.log(sparqlDatasetResult);
        const dateGenerated: Date = new Date(sparqlDatasetResult.dateGenerated.value);

        const displayDateGenerated: string = dateGenerated.getFullYear() + '-'
          + (dateGenerated.getMonth() + 1).toString() + '-' + dateGenerated.getDate().toString();

        //const datasetDescription: string = `<h2>`+ sparqlDatasetResult.source.value + `</h2>` 
        //  + `<span>sparqlDatasetResult.description.value</span>`;

        tableArr.push({ datasetId: sparqlDatasetResult.source.value,
          dateGenerated: displayDateGenerated,
          triples: sparqlDatasetResult.statements.value,
          entities: sparqlDatasetResult.entities.value,
          properties: sparqlDatasetResult.properties.value,
          classes: sparqlDatasetResult.classes.value
          });
    }
    this.dataSource = new MatTableDataSource(tableArr);
    this.dataSource.sort = this.sort;
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
