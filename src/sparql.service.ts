import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { MatTableDataSource, MatSort } from '@angular/material';

import 'rxjs/add/operator/map';

import { DatasetsInfoService } from './datasets-info.service';

@Injectable({
  providedIn: 'root'
})
export class SparqlService {

  // TODO: make it a parameter
  private sparqlEndpoint: string = 'http://graphdb.dumontierlab.com/repositories/ncats-red-kg';

  public prefixRegistry = {
    bl: 'http://w3id.org/biolink/vocab/',
    biolink: 'https://w3id.org/biolink/vocab/',
    d2s: 'https://w3id.org/data2services/',
    rdf: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
    rdfs: 'http://www.w3.org/2000/01/rdf-schema#',
    dc: 'http://purl.org/dc/elements/1.1/',
    obo: 'http://purl.obolibrary.org/obo/',
    owl: 'http://www.w3.org/2002/07/owl#'
  };

  constructor(private http: HttpClient,
              private datasetsInfo: DatasetsInfoService) { }

  getAllDatasetsInfo(overviewComponent: any, detailComponent: any, datasetId: string) {
    console.log('getAllDatasetsInfo (execute SPARQL query)');

    const httpHeaders = new HttpHeaders({
      'Content-type': 'application/x-www-form-urlencoded'
      //'Accept': 'application/json'
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
    this.http.get(this.sparqlEndpoint, { params: datasetSparqlHttpParams, headers: httpHeaders})
      .subscribe(data => {
        const sparqlResultArray = data['results']['bindings'];
        this.datasetsInfo.hashAll = {};

        // Map the SPARQL query results to an object for each dataset in datasetsInfo.hashAll
        sparqlResultArray.forEach((sparqlResultRow: any, index: number) => {
          const datasetId = sparqlResultRow.source.value;
          if (this.datasetsInfo.hashAll[datasetId] == null) {
            this.datasetsInfo.hashAll[datasetId] = {};
            this.datasetsInfo.hashAll[datasetId].datasetId = datasetId;
            this.datasetsInfo.hashAll[datasetId].source = sparqlResultRow.source;
            this.datasetsInfo.hashAll[datasetId].relationsArray = [];
          }
          this.datasetsInfo.hashAll[datasetId].description = sparqlResultRow.description;
          this.datasetsInfo.hashAll[datasetId].homepage = sparqlResultRow.homepage;
          this.datasetsInfo.hashAll[datasetId].dateGenerated = sparqlResultRow.dateGenerated;
          this.datasetsInfo.hashAll[datasetId].statements = sparqlResultRow.statements;
          this.datasetsInfo.hashAll[datasetId].entities = sparqlResultRow.entities;
          this.datasetsInfo.hashAll[datasetId].properties = sparqlResultRow.properties;
          this.datasetsInfo.hashAll[datasetId].classes = sparqlResultRow.classes;
          this.datasetsInfo.hashAll[datasetId].graph = sparqlResultRow.graph;
          // Be careful when multiple entries for a source
          const dateGenerated: Date = new Date(sparqlResultRow.dateGenerated.value);
          this.datasetsInfo.hashAll[datasetId].displayDateGenerated = dateGenerated.getFullYear() + '-'
            + (dateGenerated.getMonth() + 1).toString() + '-' + dateGenerated.getDate().toString();
          // TO REMOVE: if (this.datasetsInfo.hashAll[datasetId].relationsArray == null) {
          //  this.datasetsInfo.hashAll[datasetId].relationsArray = [];
          //}
        });

        // Get relations for each dataset
        this.http.get(this.sparqlEndpoint, { params: relationSparqlHttpParams, headers: httpHeaders})
          .subscribe(relationData => {
            const relationSparqlResultArray = relationData['results']['bindings'];
            relationSparqlResultArray.forEach((sparqlResultRow: any, index: number) => {
              const datasetId = sparqlResultRow.source.value;
              this.datasetsInfo.hashAll[datasetId].relationsArray.push({
                classCount1: sparqlResultRow.classCount1,
                class1: sparqlResultRow.class1,
                relationWith: sparqlResultRow.relationWith,
                classCount2: sparqlResultRow.classCount2,
                class2: sparqlResultRow.class2
              });
            });

            // Now generate array and tables for overview and relations from hash to avoid duplicates
            this.datasetsInfo.arrayDatasetsNav = Object.keys(this.datasetsInfo.hashAll);
            this.datasetsInfo.datasets = [];
            const tableArr: Element[] = [];
            for (const key in this.datasetsInfo.hashAll) {
              if (this.datasetsInfo.hashAll.hasOwnProperty(key)) {
                // Add dataset hash to an array of datasets (to have array and hash available)
                this.datasetsInfo.datasets.push(this.datasetsInfo.hashAll[key]);
                // Generate the array for datasets details tables
                tableArr.push({ datasetId: this.datasetsInfo.hashAll[key].source.value,
                  dateGenerated: this.datasetsInfo.hashAll[key].displayDateGenerated,
                  triples: this.datasetsInfo.hashAll[key].statements.value,
                  entities: this.datasetsInfo.hashAll[key].entities.value,
                  properties: this.datasetsInfo.hashAll[key].properties.value,
                  classes: this.datasetsInfo.hashAll[key].classes.value
                });
                const relationsArr: RelationElement[] = [];
                let relationCount = 0;
                this.datasetsInfo.hashAll[key].ngxGraph = {nodes: [], edges: []};
                this.datasetsInfo.hashAll[key].relationsArray.forEach( (element) => {
                  // Generate the array for datasets relations tables
                  relationsArr.push({
                    classCount1: element.classCount1.value,
                    class1: this.shortenUri(element.class1.value),
                    relationWith: this.shortenUri(element.relationWith.value),
                    class2: this.shortenUri(element.class2.value),
                    classCount2: element.classCount2.value
                  });
                  // Generate the hash for the ngx-graph
                  console.log('hashes:');
                  console.log(this.cleanUrl(element.class1.value));
                  console.log(this.cleanUrl(element.class2.value));
                  // TODO: We need to generate a hash to make sure nodes are uniques. Or try 2 SPARQL queries
                  if (this.cleanUrl(element.class1.value) !== this.cleanUrl(element.class2.value)) {
                    relationCount = relationCount + 1;

                    // avoid duplicate nodes
                    if (this.datasetsInfo.hashAll[key].ngxGraph.nodes.findIndex(x => x.id === this.cleanUrl(element.class1.value)) === -1) {
                      this.datasetsInfo.hashAll[key].ngxGraph.nodes.push(
                        {data: {id: this.cleanUrl(element.class1.value), name: element.class1.value, 
                          faveColor: '#F5A45D', faveShape: 'rectangle'}}
                      );
                    }
                    if (this.datasetsInfo.hashAll[key].ngxGraph.nodes.findIndex(x => x.id === this.cleanUrl(element.class2.value)) === -1) {
                      this.datasetsInfo.hashAll[key].ngxGraph.nodes.push(
                        {data: {id: this.cleanUrl(element.class2.value), name: element.class2.value, 
                          faveColor: '#F5A45D', faveShape: 'rectangle'}}
                      );
                    }
                    this.datasetsInfo.hashAll[key].ngxGraph.edges.push(
                      {data: {source: this.cleanUrl(element.class1.value), faveColor: '#6FB1FC',
                      target: this.cleanUrl(element.class2.value)}}
                      // {
                      //   id: relationCount.toString(),
                      //   source: this.cleanUrl(element.class1.value),
                      //   target: this.cleanUrl(element.class2.value),
                      //   label: element.relationWith.value
                      // }
                    );
                  }
                });
                this.datasetsInfo.hashAll[key].relationsTableDataSource = new MatTableDataSource(relationsArr);
                // this.datasetsInfo.datasetSelected.relationsTableDataSource = new MatTableDataSource(relationsArr);
                if (detailComponent != null) {
                  // this.datasetsInfo.hashAll[key].relationsTableDataSource.sort = detailComponent.sort;
                  console.log('detailComponent:');
                  console.log(detailComponent);
                  // console.log(detailComponent.sortRelations);
                  // this.datasetsInfo.datasetSelected.relationsTableDataSource.sort = detailComponent['sortRelations'];

                  // This one should work but says detailComponent is undefined:
                  // this.datasetsInfo.hashAll[key].relationsTableDataSource.sortRelations = detailComponent.sortRelations;
                  // this.datasetsInfo.hashAll[key].relationsTableDataSource.sort = detailComponent.sort;
                  this.datasetsInfo.hashAll[key].relationsTableDataSource.sort = detailComponent.sort;
                }
              }
            }
            if (datasetId != null) {
              this.datasetsInfo.datasetSelected = this.datasetsInfo.hashAll[datasetId];
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
      });
  }

  describeUri(uriToDescribe: string) {
    console.log('DescribeURI: ' + uriToDescribe);

    const httpHeaders = new HttpHeaders({
      'Content-type': 'application/x-www-form-urlencoded'
    });

    // Define SPARQL query to retrieve statements about the URI to describe
    const describeSparqlHttpParams = new HttpParams()
      .set('query', `SELECT DISTINCT ?subject ?predicate ?object ?graph WHERE {
        {
            GRAPH ?graph {
              <` + uriToDescribe + `> ?predicate ?object .
            }
        } UNION {
            GRAPH ?graph {
              ?subject ?predicate <` + uriToDescribe + `> .
            }
        } UNION {
          GRAPH ?graph {
            ?subject <` + uriToDescribe + `> ?object .
          }
      }
    } LIMIT 1000`).set('format', 'json');

    // Execute SPARQL query using HTTP GET
    return this.http.get(this.sparqlEndpoint, { params: describeSparqlHttpParams, headers: httpHeaders});
  }



  private cleanUrl(urlToClean: string) {
    return urlToClean.replace(/\//gi, '').replace(':', '');
  }

  // resolve URI namespace to use a prefix and add link to full URI
  public getUrlHtml(urlToRender: string) {
    if (urlToRender.startsWith('http://') || urlToRender.startsWith('https://')) {
      // TODO: make describe endpoint URL it a variable

      const prefixUrlToRender = `<a href="http://localhost:4200/describe?uri=`
      + urlToRender + `" class="describeUrl">`;
      // console.log(prefixUrlToRender);

      for (const prefix in this.prefixRegistry) {
        if (urlToRender.startsWith(this.prefixRegistry[prefix])) {
          return prefixUrlToRender + urlToRender.replace(this.prefixRegistry[prefix], prefix + ':') + '</a>';
        }
      }
      return prefixUrlToRender + urlToRender + '</a>';
    }
    return urlToRender;
  }

  // Only resolve URI namespace to use a prefix (to factorise)
  public shortenUri(uriToShorten: string) {
    for (const prefix in this.prefixRegistry) {
      if (uriToShorten.startsWith(this.prefixRegistry[prefix])) {
        return uriToShorten.replace(this.prefixRegistry[prefix], prefix + ':');
      }
    }
    return uriToShorten;
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
