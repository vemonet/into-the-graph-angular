import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
// TODO: remove? import { DataSource } from '@angular/cdk/table';
// TODO: create a service to perform SPARQL queries?
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

import { DatasetsInfoService } from '../../datasets-info.service';

@Component({
  selector: 'app-datasets-overview',
  templateUrl: './datasets-overview.component.html',
  styleUrls: ['./datasets-overview.component.scss'],
})
export class DatasetsOverviewComponent implements OnInit {

  displayedColumns = [];
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private router: Router,
    private http: HttpClient,
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
    this.router.navigateByData({
      url: ["/dataset/" + row.datasetId],
      data: this.datasetsInfo.datasets,
      //extras: {} - <NavigationExtras> type, optional parameter
    });
  }

  createTable() {
    console.log('getAlldatasets and createTable:');

    const httpHeaders = new HttpHeaders({
      'Content-type': 'application/x-www-form-urlencoded'
      //'Accept': 'application/json'
    });

    const httpParams = new HttpParams()
      .set('query', `PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
      PREFIX dct: <http://purl.org/dc/terms/>
      PREFIX bl: <http://w3id.org/biolink/vocab/>
      PREFIX dctypes: <http://purl.org/dc/dcmitype/>
      PREFIX idot: <http://identifiers.org/idot/>
      PREFIX dcat: <http://www.w3.org/ns/dcat#>
      PREFIX void: <http://rdfs.org/ns/void#>
      PREFIX dc: <http://purl.org/dc/elements/1.1/>
      PREFIX foaf: <http://xmlns.com/foaf/0.1/>
      SELECT ?source ?description ?homepage ?dateGenerated ?statements ?entities ?properties ?classes ?graph
      WHERE {
        GRAPH ?g {
          ?dataset a dctypes:Dataset ;
            dct:description ?description ;
            foaf:page ?homepage ;
            idot:preferredPrefix ?source .
          ?version dct:isVersionOf ?dataset ; 
            dcat:distribution ?rdfDistribution .
          ?rdfDistribution a void:Dataset ;
            dcat:accessURL ?graph ;
            void:triples ?statements ;
            void:entities ?entities ;
            void:properties ?properties ;
            dct:issued ?dateGenerated .
          ?rdfDistribution void:classPartition [
            void:class rdfs:Class ;
            void:distinctSubjects ?classes
          ] .
        }
      } ORDER BY DESC(?statements)`)
      .set('format', 'json');

    this.http.get('http://graphdb.dumontierlab.com/repositories/ncats-red-kg', { params: httpParams, headers: httpHeaders})
      .subscribe(data => {
        this.datasetsInfo.datasets = data['results']['bindings'];
        const tableArr: Element[] = [];
        for (const sparqlDatasetResult of this.datasetsInfo.datasets) {
            const dateGenerated: Date = new Date(sparqlDatasetResult.dateGenerated.value);
            const displayDateGenerated: string = dateGenerated.getFullYear() + '-'
              + (dateGenerated.getMonth() + 1).toString() + '-' + dateGenerated.getDate().toString();

            tableArr.push({ datasetId: sparqlDatasetResult.source.value,
              dateGenerated: displayDateGenerated,
              triples: sparqlDatasetResult.statements.value,
              entities: sparqlDatasetResult.entities.value,
              properties: sparqlDatasetResult.properties.value,
              classes: sparqlDatasetResult.classes.value
              });
        }
        this.datasetsInfo.datasetsTableDataSource = new MatTableDataSource(tableArr);
        this.datasetsInfo.datasetsTableDataSource.sort = this.sort;
        console.log('datasetsInfo.datasetsTableDataSource OK');
        console.log(this.datasetsInfo.datasets);
      });
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
