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

    this.http.get('http://graphdb.dumontierlab.com/repositories/ncats-red-kg', { params: httpParams, headers: httpHeaders})
      .subscribe(data => {
        this.datasetsInfo.datasets = data['results']['bindings'];
        const tableArr: Element[] = [];
        //for (const sparqlDatasetResult of this.datasetsInfo.datasets) {
        this.datasetsInfo.datasets.forEach((sparqlDatasetResult: any, index: number) => {
          const dateGenerated: Date = new Date(sparqlDatasetResult.dateGenerated.value);
          const displayDateGenerated: string = dateGenerated.getFullYear() + '-'
            + (dateGenerated.getMonth() + 1).toString() + '-' + dateGenerated.getDate().toString();
          this.datasetsInfo.datasets[index].displayDateGenerated = displayDateGenerated;

          tableArr.push({ datasetId: sparqlDatasetResult.source.value,
            dateGenerated: displayDateGenerated,
            triples: sparqlDatasetResult.statements.value,
            entities: sparqlDatasetResult.entities.value,
            properties: sparqlDatasetResult.properties.value,
            classes: sparqlDatasetResult.classes.value
          });
        });
        let arr = [];
        const datasetArray = this.datasetsInfo.datasets;
        Object.keys(datasetArray).map(function(key){
          arr.push(datasetArray[key].source.value);
          return arr;
        });
        this.datasetsInfo.arrayDatasetsNav = arr;
        this.datasetsInfo.filteredArrayDatasetsNav = this.datasetsInfo.arrayDatasetsNav;
        this.datasetsInfo.datasetsTableDataSource = new MatTableDataSource(tableArr);
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
