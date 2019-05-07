import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { MatTableDataSource, MatSort } from '@angular/material';

import 'rxjs/add/operator/map';

import { DatasetsInfoService } from './datasets-info.service';

@Injectable({
  providedIn: 'root'
})
export class SparqlService {

  private sparqlEndpoint: string = 'http://graphdb.dumontierlab.com/repositories/ncats-red-kg';

  constructor(private http: HttpClient,
              private datasetsInfo: DatasetsInfoService) { }

  getAllDatasetsInfo(overviewComponent: any, detailComponent: any, datasetId: string) {
    console.log('getAllDatasetsInfo (execute SPARQL query)');

    const httpHeaders = new HttpHeaders({
      'Content-type': 'application/x-www-form-urlencoded'
      //'Accept': 'application/json'
    });

    // Define SPARQL query to retrieve informations on datasets
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
      PREFIX void-ext: <http://ldf.fi/void-ext#>
      SELECT ?source ?description ?homepage ?dateGenerated ?statements ?entities ?properties ?classes ?graph 
        ?classCount1 ?class1 ?relationWith ?classCount2 ?class2
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
          ?rdfDistribution void:propertyPartition [
              void:property ?relationWith ;
              void:classPartition [
                  void:class ?class1 ;
                  void:distinctSubjects ?classCount1 ;
              ];
              void-ext:objectClassPartition [
                void:class ?class2 ;
                void:distinctObjects ?classCount2 ;
          ]] . 
        }
      } ORDER BY DESC(?statements)`)
      .set('format', 'json');

    // Execute SPARQL query using HTTP GET
    this.http.get(this.sparqlEndpoint, { params: httpParams, headers: httpHeaders})
      .subscribe(data => {
        const sparqlResultArray = data['results']['bindings'];

        // Map the SPARQL query results to an object for each dataset in datasetsInfo.hashAll
        sparqlResultArray.forEach((sparqlResultRow: any, index: number) => {
          const datasetId = sparqlResultRow.source.value;
          if (this.datasetsInfo.hashAll[datasetId] == null){
            this.datasetsInfo.hashAll[datasetId] = {};
            this.datasetsInfo.hashAll[datasetId].datasetId = datasetId;
            this.datasetsInfo.hashAll[datasetId].source = sparqlResultRow.source;
          }
          this.datasetsInfo.hashAll[datasetId].description = sparqlResultRow.description;
          this.datasetsInfo.hashAll[datasetId].homepage = sparqlResultRow.homepage;
          this.datasetsInfo.hashAll[datasetId].dateGenerated = sparqlResultRow.dateGenerated;
          this.datasetsInfo.hashAll[datasetId].statements = sparqlResultRow.statements;
          this.datasetsInfo.hashAll[datasetId].entities = sparqlResultRow.entities;
          this.datasetsInfo.hashAll[datasetId].properties = sparqlResultRow.properties;
          this.datasetsInfo.hashAll[datasetId].classes = sparqlResultRow.classes;
          this.datasetsInfo.hashAll[datasetId].graph = sparqlResultRow.graph;
          if (this.datasetsInfo.hashAll[datasetId].relationsArray == null) {
            this.datasetsInfo.hashAll[datasetId].relationsArray = [];
          }
          // Get relations for each dataset
          this.datasetsInfo.hashAll[datasetId].relationsArray.push({
            classCount1: sparqlResultRow.classCount1,
            class1: sparqlResultRow.class1,
            relationWith: sparqlResultRow.relationWith,
            classCount2: sparqlResultRow.classCount2,
            class2: sparqlResultRow.class2
          });
          // Be careful when multiple entries for a source
          const dateGenerated: Date = new Date(sparqlResultRow.dateGenerated.value);
          this.datasetsInfo.hashAll[datasetId].displayDateGenerated = dateGenerated.getFullYear() + '-'
            + (dateGenerated.getMonth() + 1).toString() + '-' + dateGenerated.getDate().toString();
        });

        if (datasetId != null) {
          this.datasetsInfo.datasetSelected = this.datasetsInfo.hashAll[datasetId];
        }

        // Now generate array and tables for overview and relations from hash to avoid duplicates
        this.datasetsInfo.arrayDatasetsNav = Object.keys(this.datasetsInfo.hashAll);
        this.datasetsInfo.datasets = [];
        const tableArr: Element[] = [];
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
            const relationsArr: RelationElement[] = [];
            this.datasetsInfo.hashAll[key].relationsArray.forEach( (element) => {
              relationsArr.push({
                classCount1: element.classCount1.value,
                class1: element.class1.value,
                relationWith: element.relationWith.value,
                class2: element.class2.value,
                classCount2: element.classCount2.value
              });
            });
            this.datasetsInfo.hashAll[key].relationsTableDataSource = new MatTableDataSource(relationsArr);
            //this.datasetsInfo.datasetSelected.relationsTableDataSource = new MatTableDataSource(relationsArr);
            if (detailComponent != null) {
              //this.datasetsInfo.hashAll[key].relationsTableDataSource.sort = detailComponent.sort;
              console.log('detailComponent:');
              console.log(detailComponent);
              //console.log(detailComponent.sortRelations);
              //this.datasetsInfo.datasetSelected.relationsTableDataSource.sort = detailComponent['sortRelations'];

              // This one should work but says detailComponent is undefined:
              //this.datasetsInfo.hashAll[key].relationsTableDataSource.sortRelations = detailComponent.sortRelations;
              //this.datasetsInfo.hashAll[key].relationsTableDataSource.sort = detailComponent.sort;
              this.datasetsInfo.hashAll[key].relationsTableDataSource.sort = detailComponent.sort;
            }
          }
        }
        this.datasetsInfo.datasetsTableDataSource = new MatTableDataSource(tableArr);
        // Sort for overview and define selected dataset if a dataset has been selected
        if (overviewComponent != null) {
          console.log('overviewComponent:');
          console.log(overviewComponent);
          console.log(overviewComponent.sort);
          this.datasetsInfo.datasetsTableDataSource.sort = overviewComponent.sort;
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

export interface RelationElement {
  classCount1: number;
  class1: string;
  relationWith: string;
  class2: string;
  classCount2: number;
}
