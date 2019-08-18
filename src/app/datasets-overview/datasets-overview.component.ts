import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { DatasetsInfoService } from '../../datasets-info.service';
import { SparqlService } from '../../sparql.service';
// import { DataTableModule } from 'datatables-angular';

@Component({
  selector: 'app-datasets-overview',
  templateUrl: './datasets-overview.component.html',
  styleUrls: ['./datasets-overview.component.scss'],
})
export class DatasetsOverviewComponent implements OnInit, AfterViewInit {

  // public sparqlResultArrays = {};

  public datasetStatSparqlResultArray: any;
  public entitiesRelationSparqlResultArray: any;

  constructor(
    private http: HttpClient,
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
    this.datasetsInfo.datasetSelected = null;
    this.getOverviewData();
    // this.sparqlResultArrays = this.getOverviewData();
  }

  ngAfterViewInit() {
    this.datasetsInfo.datasetSelected = null;
    //this.getOverviewData();
  }

  printConsole() {
    console.log(this.datasetStatSparqlResultArray);
  }

  getOverviewData() {
    const httpHeaders = new HttpHeaders({
      'Content-type': 'application/x-www-form-urlencoded'
    });

    // Define SPARQL query to retrieve informations on datasets
    const datasetSparqlHttpParams = new HttpParams()
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
      SELECT DISTINCT ?source ?description ?homepage ?dateGenerated ?statements ?entities ?properties ?classes ?graph
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

    const relationSparqlHttpParams = new HttpParams()
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
      SELECT DISTINCT ?source ?graph ?classCount1 ?class1 ?relationWith ?classCount2 ?class2
      WHERE {
        GRAPH ?g {
          ?dataset a dctypes:Dataset ;
            idot:preferredPrefix ?source .
          ?version dct:isVersionOf ?dataset ;
            dcat:distribution ?rdfDistribution .
          ?rdfDistribution a void:Dataset ;
            dcat:accessURL ?graph .
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
      } ORDER BY DESC(?classCount1)`)
      .set('format', 'json');

    // Execute SPARQL query using HTTP GET
    this.http.get(this.sparql.sparqlEndpoint, { params: datasetSparqlHttpParams, headers: httpHeaders})
      .subscribe(data => {
        // data['results']['bindings'].forEach(element => {
        //   this.datasetStatSparqlResultArray.push(jQuery.extend(true, {}, element)); // deep copy
        // });

        this.datasetStatSparqlResultArray = data['results']['bindings'];
        //this.datasetsInfo.datasetStatSparqlResultArray = data['results']['bindings'];

        console.log('Data about datasets stats retrieved:');
        console.log(this.datasetStatSparqlResultArray );

        // Get relations for each dataset
        this.http.get(this.sparql.sparqlEndpoint, { params: relationSparqlHttpParams, headers: httpHeaders})
          .subscribe(relationData => {
            this.entitiesRelationSparqlResultArray = relationData['results']['bindings'];
            console.log('Data about entities relations retrieved:');
            console.log(this.entitiesRelationSparqlResultArray);
          });
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
