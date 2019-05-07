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

    // TODO: SPARQL query to get all relations infos
    // And only generate one entry per dataset in datasetsInfo.dataset
    // Use Hash instead of Array?

    this.http.get(this.sparqlEndpoint, { params: httpParams, headers: httpHeaders})
      .subscribe(data => {
        const sparqlResultArray = data['results']['bindings'];
        //this.datasetsInfo.datasets = data['results']['bindings'];

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
          // this.datasetsInfo.datasets[index].displayDateGenerated = displayDateGenerated;
          // this.datasetsInfo.datasets[index].relations = [];

          // Now that the dataset object have been built, we define it in the dataset hash
          //this.datasetsInfo.hashAll[sparqlResultRow.source.value] = this.datasetsInfo.datasets[index];
        });
        this.datasetsInfo.datasets = [];
        for (let key in this.datasetsInfo.hashAll) {
          if (this.datasetsInfo.hashAll[key] != null) {
            this.datasetsInfo.datasets.push(this.datasetsInfo.hashAll[key]);
          }
        }
        console.log('after SPARQL query with relations');
        console.log(this.datasetsInfo);
        this.datasetsInfo.arrayDatasetsNav = Object.keys(this.datasetsInfo.hashAll);
        // Now generate array and tables from hash to avoid duplicates
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
          }
        }
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

export interface RelationElement {
  classCount1: number;
  class1: string;
  relationWith: string;
  class2: string;
  classCount2: number;
}
