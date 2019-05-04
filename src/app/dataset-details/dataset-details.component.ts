import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-dataset-details',
  templateUrl: './dataset-details.component.html',
  styleUrls: ['./dataset-details.component.scss']
})
export class DatasetDetailsComponent implements OnInit {

  dataSource;
  datasetId: string;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute) { }

  ngOnInit() {
    console.log('ngOnInit');
    this.datasetId = this.route.snapshot.paramMap.get('datasetId');
    console.log(this.datasetId);
    this.getDatasetInfos(this.datasetId);
  }

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
          this.dataSource = data['results']['bindings'][0];
          console.log(this.dataSource);
          // this.dataSource.sort = this.sort;
       });
  }

}
