import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { DatasetsInfoService } from '../../datasets-info.service';
import { SparqlService } from '../../sparql.service';

@Component({
  selector: 'app-datasets-overview',
  templateUrl: './datasets-overview.component.html',
  styleUrls: ['./datasets-overview.component.scss'],
})
export class DatasetsOverviewComponent implements OnInit {

  public datasetStatSparqlResultArray: any;
  public entitiesRelationSparqlResultArray: any;
  dtOptions: DataTables.Settings = {pageLength: 15};

  constructor(
    private http: HttpClient,
    private sparql: SparqlService,
    private datasetsInfo: DatasetsInfoService) { }

  ngOnInit() {
    this.datasetsInfo.datasetSelected = null;
    this.getOverviewData();
  }

  getOverviewData() {
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
      SELECT DISTINCT ?graph ?description ?homepage ?dateGenerated ?statements ?entities ?properties ?classes
      WHERE {
        GRAPH ?g {
          OPTIONAL {
            ?dataset a dctypes:Dataset ;
              dct:description ?description ;
              foaf:page ?homepage .
            ?version dct:isVersionOf ?dataset ;
              dcat:distribution ?graph .
          }
          ?graph a void:Dataset ;
            void:triples ?statements ;
            void:entities ?entities ;
            void:properties ?properties .
          OPTIONAL {
            ?graph dct:issued ?dateGenerated .
          }
          ?graph void:classPartition [
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
      SELECT DISTINCT ?graph ?classCount1 ?class1 ?relationWith ?classCount2 ?class2
      WHERE {
        GRAPH ?g {
          ?graph a void:Dataset .
          ?graph void:propertyPartition [
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
    this.http.get(this.sparql.sparqlEndpoint, { params: datasetSparqlHttpParams, headers: this.sparql.httpHeaders})
      .subscribe(data => {
        this.datasetStatSparqlResultArray = data['results']['bindings'];

        // Format date to be readable
        this.datasetStatSparqlResultArray.forEach(sparqlResultRow => {
          if (sparqlResultRow.dateGenerated.value) {
            const dateGenerated: Date = new Date(sparqlResultRow.dateGenerated.value);
            sparqlResultRow.dateGenerated.value = dateGenerated.getFullYear() + '-'
            + (dateGenerated.getMonth() + 1).toString() + '-' + dateGenerated.getDate().toString();
          } else {
            sparqlResultRow.dateGenerated.value = 'Not defined';
          }
        });

        console.log('Data about datasets stats retrieved:');
        console.log(this.datasetStatSparqlResultArray );

        // Get relations for each dataset
        this.http.get(this.sparql.sparqlEndpoint, { params: relationSparqlHttpParams, headers: this.sparql.httpHeaders})
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
