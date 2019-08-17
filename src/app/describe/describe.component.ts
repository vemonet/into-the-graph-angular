import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SparqlService } from '../../sparql.service';

@Component({
  selector: 'app-describe',
  templateUrl: './describe.component.html',
  styleUrls: ['./describe.component.scss']
})
export class DescribeComponent implements OnInit {
  Object = Object; // To iterate over hash in html
  uriToDescribe: string;
  describeHash: {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private sparql: SparqlService
    ) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.uriToDescribe = params.uri;
    });
  }

  ngOnInit() {
    this.sparql.describeUri(this.uriToDescribe)
      .subscribe(data => {
        const sparqlResultArray = data['results']['bindings'];
        this.describeHash = {};

        // Build describe object {graph1: {property1: [object1, object2]}}
        sparqlResultArray.forEach((sparqlResultRow: any, index: number) => {
          if (!(sparqlResultRow.graph.value in this.describeHash)) {
            this.describeHash[sparqlResultRow.graph.value] = {};
          }
          if (!(sparqlResultRow.predicate.value in this.describeHash[sparqlResultRow.graph.value])) {
            this.describeHash[sparqlResultRow.graph.value][sparqlResultRow.predicate.value] = [];
          }
          this.describeHash[sparqlResultRow.graph.value][sparqlResultRow.predicate.value].push(sparqlResultRow.object.value);
        });
        console.log('describe object:');
        console.log(this.describeHash);
      });
  }

}
