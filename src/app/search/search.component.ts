import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
// import { ActivatedRoute } from '@angular/router';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { SparqlService } from '../../sparql.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  private searchText: string;
  private searchSparqlResultArray: any;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private sparql: SparqlService) { }

  ngOnInit() {
    this.searchText = this.route.snapshot.paramMap.get('searchText');
    // this.sparql.getAllDatasetsInfo(null, this, this.datasetId);
  
    this.getDatasetData(this.searchText);

    console.log('after ngOnInit dataset-detail. datasetsInfo:')
    console.log(this.searchSparqlResultArray);
  }

  // TODO: use ASK?
  getDatasetData(searchText: string) {
    const searchUriSparqlHttpParams = new HttpParams()
      .set('query', `SELECT DISTINCT ?searchResult WHERE {
        {
            ?searchResult ?p ?o .
        } UNION {
            ?s ?searchResult ?o .
        } UNION {
            ?s ?p ?searchResult .
        }
        FILTER(?searchResult = <` + this.searchText + `>)
    } LIMIT 5`)
      .set('format', 'json');

    const searchTextSparqlHttpParams = new HttpParams()
      .set('query', `SELECT ?searchResult WHERE {
        ?searchResult ?p ?o .
        FILTER(isLiteral(?o))
        FILTER contains(?o, "` + this.searchText + `")
        } LIMIT 5`)
      .set('format', 'json');

    if (this.searchText.startsWith('http')) {
      this.http.get(this.sparql.sparqlEndpoint, { params: searchUriSparqlHttpParams, headers: this.sparql.httpHeaders})
      .subscribe(relationData => {
        this.searchSparqlResultArray = relationData['results']['bindings'];
        console.log('Search results:');
        console.log(this.searchSparqlResultArray);
      });

    } else {
      this.http.get(this.sparql.sparqlEndpoint, { params: searchTextSparqlHttpParams, headers: this.sparql.httpHeaders})
      .subscribe(relationData => {
        this.searchSparqlResultArray = relationData['results']['bindings'];
        console.log('Search results:');
        console.log(this.searchSparqlResultArray);
      });
    }
  }
}
