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

  getDatasetInfos(datasetId: any) {
    const httpHeaders = new HttpHeaders({
      'Content-type': 'application/x-www-form-urlencoded'
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
        FILTER(?source = "` + datasetId + `")
        }
      } ORDER BY DESC(?statements)`)
      .set('format', 'json');

    this.http.get('http://graphdb.dumontierlab.com/repositories/ncats-red-kg', { params: httpParams, headers: httpHeaders})
      .subscribe(data => {
          const tableArr: Element[] = [];
          // TODO: remove this
          for (const sparqlDatasetResult of data['results']['bindings']) {
              console.log(sparqlDatasetResult);
              const dateGenerated: Date = new Date(sparqlDatasetResult.dateGenerated.value);

              const displayDateGenerated: string = dateGenerated.getFullYear() + '-'
                + (dateGenerated.getMonth() + 1).toString() + '-' + dateGenerated.getDate().toString();

              //const datasetDescription: string = `<h2>`+ sparqlDatasetResult.source.value + `</h2>` 
              //  + `<span>sparqlDatasetResult.description.value</span>`;
              console.log('result SPARQL query:');
              console.log(sparqlDatasetResult);
          }
          return data['results']['bindings'][0];
       });
  }

  // async getAllDatasets() {

  //   const httpHeaders = new HttpHeaders({
  //     'Content-type': 'application/x-www-form-urlencoded'
  //     //'Accept': 'application/json'
  //   });

  //   const httpParams = new HttpParams()
  //     .set('query', `PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
  //     PREFIX dct: <http://purl.org/dc/terms/>
  //     PREFIX bl: <http://w3id.org/biolink/vocab/>
  //     PREFIX dctypes: <http://purl.org/dc/dcmitype/>
  //     PREFIX idot: <http://identifiers.org/idot/>
  //     PREFIX dcat: <http://www.w3.org/ns/dcat#>
  //     PREFIX void: <http://rdfs.org/ns/void#>
  //     PREFIX dc: <http://purl.org/dc/elements/1.1/>
  //     SELECT ?source ?description ?dateGenerated ?statements ?entities ?properties ?classes ?graph
  //     WHERE {
  //       GRAPH ?g {
  //         ?dataset a dctypes:Dataset ; dct:description ?description ; idot:preferredPrefix ?source .
  //         ?version dct:isVersionOf ?dataset ; dcat:distribution ?rdfDistribution .
  //         ?rdfDistribution a void:Dataset ;
  //           dcat:accessURL ?graph ;
  //           void:triples ?statements ;
  //           void:entities ?entities ;
  //           void:properties ?properties ;
  //           dct:issued ?dateGenerated .
  //         ?rdfDistribution void:classPartition [
  //           void:class rdfs:Class ;
  //           void:distinctSubjects ?classes
  //         ] .
  //       }
  //     } ORDER BY DESC(?statements)`)
  //     .set('format', 'json');

  //   // Wait for the request to resolve
  //   // this.http.get<any>('http://graphdb.dumontierlab.com/repositories/ncats-red-kg', { params: httpParams, headers: httpHeaders})
  //   //   .toPromise().then(data => {
  //   //     console.log('Promise resolved.')
  //   //     console.log(data['results']['bindings']);
  //   //     return data['results']['bindings'];
  //   // });
  //   // console.log('I will not wait until promise is resolved..');

  //   this.http.get('http://graphdb.dumontierlab.com/repositories/ncats-red-kg', { params: httpParams, headers: httpHeaders})
  //     .subscribe(data => {
  //       this.datasetsInfo.datasets = data['results']['bindings'];
  //       const tableArr: Element[] = [];
  //       for (const sparqlDatasetResult of this.datasetsInfo.datasets) {
  //           console.log(sparqlDatasetResult);
  //           const dateGenerated: Date = new Date(sparqlDatasetResult.dateGenerated.value);
  //           const displayDateGenerated: string = dateGenerated.getFullYear() + '-'
  //             + (dateGenerated.getMonth() + 1).toString() + '-' + dateGenerated.getDate().toString();

  //           tableArr.push({ datasetId: sparqlDatasetResult.source.value,
  //             dateGenerated: displayDateGenerated,
  //             triples: sparqlDatasetResult.statements.value,
  //             entities: sparqlDatasetResult.entities.value,
  //             properties: sparqlDatasetResult.properties.value,
  //             classes: sparqlDatasetResult.classes.value
  //           });
  //       }
  //       this.datasetsInfo.datasetsTableDataSource = new MatTableDataSource(tableArr);
  //       //this.datasetsInfo.datasetsTableDataSource.sort = this.sort;
  //       console.log('datasetsInfo.datasetsTableDataSource OK');
  //       console.log(this.datasetsInfo.datasets);
  //       console.log(this.datasetsInfo.datasetsTableDataSource);
  //       return this.datasetsInfo.datasets;
  //     });

  //   // return this.http.get('http://graphdb.dumontierlab.com/repositories/ncats-red-kg', { params: httpParams, headers: httpHeaders})
  //   //   .map(data => {
  //   //     console.log('in sparql service');
  //   //     console.log(data['results']['bindings']);
  //   //     return data['results']['bindings'];
  //   //    });
  // }
}

export interface Element {
  datasetId: string;
  dateGenerated: string;
  triples: number;
  entities: number;
  properties: number;
  classes: number;
}
