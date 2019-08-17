import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SparqlService } from '../../sparql.service';

import {MatExpansionModule} from '@angular/material/expansion';

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

        // Build describe object
        // {graph1: {asSubject: {property1: [object1, object2]}, asObject: {property1: [subject1]}}}
        sparqlResultArray.forEach((sparqlResultRow: any, index: number) => {
          // SPO case. Described URI is the subject
          if (!('subject' in sparqlResultRow)) {
            if (!(sparqlResultRow.graph.value in this.describeHash)) {
              this.describeHash[sparqlResultRow.graph.value] = {asSubject: {}, asObject: {}, asPredicate: {}};
            }
            if (!(sparqlResultRow.predicate.value in this.describeHash[sparqlResultRow.graph.value].asSubject)) {
              this.describeHash[sparqlResultRow.graph.value].asSubject[sparqlResultRow.predicate.value] = [];
            }
            this.describeHash[sparqlResultRow.graph.value].asSubject[sparqlResultRow.predicate.value].push(sparqlResultRow.object.value);
          }

          // OPS case. Described URI is the object
          if (!('object' in sparqlResultRow)) {
            if (!(sparqlResultRow.graph.value in this.describeHash)) {
              this.describeHash[sparqlResultRow.graph.value] = {asSubject: {}, asObject: {}, asPredicate: {}};
            }
            if (!(sparqlResultRow.predicate.value in this.describeHash[sparqlResultRow.graph.value].asObject)) {
              this.describeHash[sparqlResultRow.graph.value].asObject[sparqlResultRow.predicate.value] = [];
            }
            this.describeHash[sparqlResultRow.graph.value].asObject[sparqlResultRow.predicate.value].push(sparqlResultRow.subject.value);
          }

          // Described URI is the predicate (PSO?)
          if (!('predicate' in sparqlResultRow)) {
            if (!(sparqlResultRow.graph.value in this.describeHash)) {
              this.describeHash[sparqlResultRow.graph.value] = {asSubject: {}, asObject: {}, asPredicate: {}};
            }
            if (!(sparqlResultRow.subject.value in this.describeHash[sparqlResultRow.graph.value].asPredicate)) {
              this.describeHash[sparqlResultRow.graph.value].asPredicate[sparqlResultRow.subject.value] = [];
            }
            this.describeHash[sparqlResultRow.graph.value].asPredicate[sparqlResultRow.subject.value].push(sparqlResultRow.object.value);
          }
        });
        console.log('describe object:');
        console.log(this.describeHash);
      });
  }

}
