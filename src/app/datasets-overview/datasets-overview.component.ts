import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
// TODO: remove? import { DataSource } from '@angular/cdk/table';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-datasets-overview',
  templateUrl: './datasets-overview.component.html',
  styleUrls: ['./datasets-overview.component.scss'],
})
export class DatasetsOverviewComponent implements OnInit {

  dataSource;
  displayedColumns = [];
  @ViewChild(MatSort) sort: MatSort;

  constructor(private http: HttpClient) { }

  /**
   * Pre-defined columns list for user table
   */
  columnNames = [{
    id: "position",
    value: "No."

  }, {
    id: "name",
    value: "Name"
  },
  {
    id: "weight",
    value: "Weight"
  },
  {
    id: "symbol",
    value: "Symbol"
  }];

  ngOnInit() {
    this.displayedColumns = this.columnNames.map(x => x.id);
    this.createTable();
  }

  createTable() {
    //console.log(this.http.get('https://reqres.in/api/users'));
    //console.log(this.http.get('http://dbpedia.org/sparql', { params: httpParams, headers: httpHeaders}));

    let httpHeaders = new HttpHeaders({
      'Content-type': 'application/x-www-form-urlencoded'
      //'Accept': 'application/json'
    });

    let httpParams = new HttpParams()
      .set('query', `PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
      PREFIX dct: <http://purl.org/dc/terms/>
      PREFIX bl: <http://w3id.org/biolink/vocab/>
      PREFIX dctypes: <http://purl.org/dc/dcmitype/>
      PREFIX idot: <http://identifiers.org/idot/>
      PREFIX dcat: <http://www.w3.org/ns/dcat#>
      PREFIX void: <http://rdfs.org/ns/void#>
      SELECT ?source ?statements ?entities ?properties ?classes ?graph
      WHERE {
        GRAPH ?g {
          ?dataset a dctypes:Dataset ; idot:preferredPrefix ?source .
          ?version dct:isVersionOf ?dataset ; dcat:distribution ?rdfDistribution .
          ?rdfDistribution a void:Dataset ; 
            dcat:accessURL ?graph ; 
            void:triples ?statements ;
            void:entities ?entities ;
            void:properties ?properties .
          ?rdfDistribution void:classPartition [
            void:class rdfs:Class ;
            void:distinctSubjects ?classes
          ] .
        } 
      } ORDER BY DESC(?statements)`)
      .set('format', 'json');

    console.log('get dbpedia');
    this.http.get('http://graphdb.dumontierlab.com/repositories/ncats-red-kg', { params: httpParams, headers: httpHeaders})
      //.map(response => response.json())
      .subscribe(data => {
          console.log(data);
       });


    let tableArr: Element[] = [{ position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' }
    ];
    this.dataSource = new MatTableDataSource(tableArr);
    this.dataSource.sort = this.sort;
  }
}

export interface Element {
  position: number,
  name: string,
  weight: number,
  symbol: string
}
