import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';


import { DatasetsInfoService } from '../../datasets-info.service';
import { SparqlService } from '../../sparql.service';

@Component({
  selector: 'app-dataset-details',
  templateUrl: './dataset-details.component.html',
  styleUrls: ['./dataset-details.component.scss'],
})
export class DatasetDetailsComponent implements OnInit {

  // sparqlResultArrays: any;
  private datasetId: string;
  public datasetStatSparqlResultArray: any;
  public entitiesRelationSparqlResultArray: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    private sparql: SparqlService,
    private datasetsInfo: DatasetsInfoService) { }

  ngOnInit() {
    this.datasetId = this.route.snapshot.paramMap.get('datasetId');

    // TO REMOVE asap
    this.sparql.getAllDatasetsInfo(null, this, this.datasetId);
    this.getDatasetData(this.datasetId);

    console.log('after ngOnInit dataset-detail. datasetsInfo:')
    console.log(this.datasetsInfo);
  }

  getDatasetData(datasetId: string) {
    const httpHeaders = new HttpHeaders({
      'Content-type': 'application/x-www-form-urlencoded'
    });

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
          ?dataset a dctypes:Dataset ;
            idot:preferredPrefix "` + datasetId + `" .
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

    // Get relations for each dataset
    this.http.get(this.sparql.sparqlEndpoint, { params: relationSparqlHttpParams, headers: httpHeaders})
      .subscribe(relationData => {
        this.entitiesRelationSparqlResultArray = relationData['results']['bindings'];
        console.log('Data about entities relations retrieved:');
        console.log(this.entitiesRelationSparqlResultArray);
      });
    }




  applyFilterRelationsTable(filterValue: string) {
    this.datasetsInfo.datasetSelected.relationsTableDataSource.filter = filterValue.trim().toLowerCase();
  }
}

// Example cytoscape graph data
// graphData = {
// nodes: [
//     {data: {id: 'j', name: 'Jerry', faveColor: '#6FB1FC', faveShape: 'triangle'}},
//     {data: {id: 'e', name: 'Elaine', faveColor: '#EDA1ED', faveShape: 'ellipse'}},
//     {data: {id: 'k', name: 'Kramer', faveColor: '#86B342', faveShape: 'octagon'}},
//     {data: {id: 'g', name: 'George', faveColor: '#F5A45D', faveShape: 'rectangle'}}
// ],
// edges: [
//     {data: {source: 'j', target: 'e', faveColor: '#6FB1FC'}},
//     {data: {source: 'j', target: 'k', faveColor: '#6FB1FC'}},
//     {data: {source: 'j', target: 'g', faveColor: '#6FB1FC'}},
//     {data: {source: 'e', target: 'j', faveColor: '#EDA1ED'}},
//     {data: {source: 'e', target: 'k', faveColor: '#EDA1ED'}}
// ]};

// Trying to get data through the router to avoid doing useless calls:
// this.route
//   .data
//   .subscribe(v => this.datasetsInfo = v.datasetsInfo);
// const navigatedData = this.router.getNavigatedData();
// console.log(navigatedData);
// if (navigatedData == null) {
//   // Execute SPARQL query to get datasets infos
//   console.log('no navigatedData. execute sparql');
//   this.sparql.getAllDatasetsInfo(null, this, this.route.snapshot.paramMap.get('datasetId'));
// } else {
//   // Get datasets infos from data passed through router
//   this.datasetsInfo = navigatedData;
// }