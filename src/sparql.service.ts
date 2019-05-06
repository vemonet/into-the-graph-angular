import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { MatTableDataSource, MatSort } from '@angular/material';

import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';

import { DatasetsInfoService } from './datasets-info.service';

@Injectable({
  providedIn: 'root'
})
export class SparqlService {

  private sparqlEndpoint: string = 'http://graphdb.dumontierlab.com/repositories/ncats-red-kg';

  constructor(private http: HttpClient,
              private datasetsInfo: DatasetsInfoService) { }

  getAllDatasetsInfo(overviewComponent: any, datasetId: string) {
    console.log('getAllDatasetsInfo (execute SPARQL query)');

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

    // TODO: SPARQL query to get all relations infos
    // And only generate one entry per dataset in datasetsInfo.dataset
    // Use Hash instead of Array?

    this.http.get(this.sparqlEndpoint, { params: httpParams, headers: httpHeaders})
      .subscribe(data => {
        this.datasetsInfo.datasets = data['results']['bindings'];

        const tableArr: Element[] = [];
        this.datasetsInfo.datasets.forEach((sparqlDatasetResult: any, index: number) => {
          // Be careful when multiple entries for a source
          const dateGenerated: Date = new Date(sparqlDatasetResult.dateGenerated.value);
          const displayDateGenerated: string = dateGenerated.getFullYear() + '-'
            + (dateGenerated.getMonth() + 1).toString() + '-' + dateGenerated.getDate().toString();
          this.datasetsInfo.datasets[index].displayDateGenerated = displayDateGenerated;

          this.datasetsInfo.hashAll[sparqlDatasetResult.source.value] = this.datasetsInfo.datasets[index];
        });
        this.datasetsInfo.arrayDatasetsNav = Object.keys(this.datasetsInfo.hashAll);
        // REMOVE: this.datasetsInfo.filteredArrayDatasetsNav = this.datasetsInfo.arrayDatasetsNav;
        this.datasetsInfo.datasetsTableDataSource = new MatTableDataSource(tableArr);
        // Now generate array from hash to remove duplicates
        this.datasetsInfo.datasets = [];

        for (const key in this.datasetsInfo.hashAll) {
          if (this.datasetsInfo.hashAll.hasOwnProperty(key)) {
            this.datasetsInfo.datasets.push(this.datasetsInfo.hashAll[key]);
            tableArr.push({ datasetId: this.datasetsInfo.hashAll[key].source.value,
              dateGenerated: this.datasetsInfo.hashAll[key].displayDateGenerated,
              triples: this.datasetsInfo.hashAll[key].statements.value,
              entities: this.datasetsInfo.hashAll[key].entities.value,
              properties: this.datasetsInfo.hashAll[key].properties.value,
              classes: this.datasetsInfo.hashAll[key].classes.value
            });
          }
        }
        if (overviewComponent != null) {
          this.datasetsInfo.datasetsTableDataSource.sort = overviewComponent.sort;
        }
        if (datasetId != null) {
          this.datasetsInfo.datasetSelected = this.datasetsInfo.datasets
            .filter(datasetFilter => datasetFilter.source.value === datasetId)[0];
        }
        console.log('After getting the SPARQL query in sparql.service. datasetsInfo:');
        console.log(this.datasetsInfo);
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
