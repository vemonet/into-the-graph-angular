import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
// TODO: remove? import { DataSource } from '@angular/cdk/table';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-datasets-overview',
  templateUrl: './datasets-overview.component.html',
  styleUrls: ['./datasets-overview.component.scss'],
})
export class DatasetsOverviewComponent implements OnInit {

  dataSource;
  displayedColumns = [];
  @ViewChild(MatSort) sort: MatSort;

  constructor(private http: HttpClient) { }

  /**
   * Pre-defined columns list for user table
   */
  columnNames = [{
    id: 'datasetId',
    value: 'Dataset'

  }, {
    id: 'dateGenerated',
    value: 'Date generated'
  },
  {
    id: 'triples',
    value: '# of triples'
  },
  {
    id: 'entities',
    value: '# of entities'
  },
  {
    id: 'properties',
    value: '# of properties'
  },
  {
    id: 'classes',
    value: '# of classes'
  }];

  ngOnInit() {
    this.displayedColumns = this.columnNames.map(x => x.id);
    this.createTable();
  }

  createTable() {
    //console.log(this.http.get('https://reqres.in/api/users'));
    //console.log(this.http.get('http://dbpedia.org/sparql', { params: httpParams, headers: httpHeaders}));

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
      SELECT ?source ?description ?dateGenerated ?statements ?entities ?properties ?classes ?graph
      WHERE {
        GRAPH ?g {
          ?dataset a dctypes:Dataset ; dct:description ?description ; idot:preferredPrefix ?source .
          ?version dct:isVersionOf ?dataset ; dcat:distribution ?rdfDistribution .
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
          const tableArr: Element[] = [];
          for (const sparqlDatasetResult of data['results']['bindings']) {
              console.log(sparqlDatasetResult);
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
          this.dataSource = new MatTableDataSource(tableArr);
          this.dataSource.sort = this.sort;
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
