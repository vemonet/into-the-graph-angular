import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SparqlService } from '../../sparql.service';

@Component({
  selector: 'app-describe',
  templateUrl: './describe.component.html',
  styleUrls: ['./describe.component.scss']
})
export class DescribeComponent implements OnInit {
  uriToDescribe: string;
  describeHash: {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private sparql: SparqlService
    ) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.uriToDescribe = params.uri;
      console.log(this.uriToDescribe); // Print the parameter to the console. 
    });
  }

  ngOnInit() {
    this.sparql.describeUri(this.uriToDescribe)
      .subscribe(data => {
        const sparqlResultArray = data['results']['bindings'];
        this.describeHash = {};

        // Map the SPARQL query results to an object for each dataset in datasetsInfo.hashAll
        sparqlResultArray.forEach((sparqlResultRow: any, index: number) => {
          if (this.describeHash[sparqlResultRow.graph.value] == null) {
            this.describeHash[sparqlResultRow.graph.value] = {};
          }
          if (this.describeHash[sparqlResultRow.graph.value][sparqlResultRow.predicate.value] == null) {
            this.describeHash[sparqlResultRow.graph.value][sparqlResultRow.predicate.value] = [];
          }
          this.describeHash[sparqlResultRow.graph.value][sparqlResultRow.predicate.value].push(sparqlResultRow.object.value);
        });
        console.log('test describe');
        console.log(this.describeHash);
      });
  }

}
