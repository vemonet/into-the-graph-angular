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
  describeHash = {};
  graphClasses = [];
  allExpanded = true;

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

        // Build describe object
        // {graph1: {asSubject: {property1: [object1, object2]}, asObject: {property1: [subject1]}}}
        sparqlResultArray.forEach((sparqlResultRow: any, index: number) => {
          // SPO case. Described URI is the subject
          if (!('subject' in sparqlResultRow)) {
            if (!(sparqlResultRow.graph.value in this.describeHash)) {
              this.describeHash[sparqlResultRow.graph.value] = {asSubject: {}, asObject: {}, asPredicate: {},
              asSubjectExtra: {}, asPredicateExtra: {}, asObjectExtra: {}, showExtra: {},
              asSubjectCount: 0, asPredicateCount: 0, asObjectCount: 0};
            }
            if (!(sparqlResultRow.predicate.value in this.describeHash[sparqlResultRow.graph.value].asSubject)) {
              this.describeHash[sparqlResultRow.graph.value].asSubject[sparqlResultRow.predicate.value] = [];
              this.describeHash[sparqlResultRow.graph.value].asSubjectExtra[sparqlResultRow.predicate.value] = [];
              this.describeHash[sparqlResultRow.graph.value].showExtra[sparqlResultRow.predicate.value] = false;
            }
            if (this.describeHash[sparqlResultRow.graph.value].asSubject[sparqlResultRow.predicate.value].length < 5) {
              this.describeHash[sparqlResultRow.graph.value].asSubject[sparqlResultRow.predicate.value].push(sparqlResultRow.object.value);
            } else {
              // We store in another key the extra statements (when more than 5), to display them when asked
              this.describeHash[sparqlResultRow.graph.value].asSubjectExtra[sparqlResultRow.predicate.value]
              .push(sparqlResultRow.object.value);
            }
            this.describeHash[sparqlResultRow.graph.value].asSubjectCount++;
          }

          // OPS case. Described URI is the object
          if (!('object' in sparqlResultRow)) {
            if (!(sparqlResultRow.graph.value in this.describeHash)) {
              this.describeHash[sparqlResultRow.graph.value] = {asSubject: {}, asObject: {}, asPredicate: {},
              asSubjectExtra: {}, asPredicateExtra: {}, asObjectExtra: {}, showExtra: {},
              asSubjectCount: 0, asPredicateCount: 0, asObjectCount: 0};
            }
            if (!(sparqlResultRow.predicate.value in this.describeHash[sparqlResultRow.graph.value].asObject)) {
              this.describeHash[sparqlResultRow.graph.value].asObject[sparqlResultRow.predicate.value] = [];
              this.describeHash[sparqlResultRow.graph.value].asObjectExtra[sparqlResultRow.predicate.value] = [];
              this.describeHash[sparqlResultRow.graph.value].showExtra[sparqlResultRow.predicate.value] = false;
            }
            if (this.describeHash[sparqlResultRow.graph.value].asObject[sparqlResultRow.predicate.value].length < 5) {
              this.describeHash[sparqlResultRow.graph.value].asObject[sparqlResultRow.predicate.value].push(sparqlResultRow.subject.value);
            } else {
              this.describeHash[sparqlResultRow.graph.value].asObjectExtra[sparqlResultRow.predicate.value]
              .push(sparqlResultRow.subject.value);
            }
            this.describeHash[sparqlResultRow.graph.value].asObjectCount++;
          }

          // Described URI is the predicate (OSO?)
          if (!('predicate' in sparqlResultRow)) {
            if (!(sparqlResultRow.graph.value in this.describeHash)) {
              this.describeHash[sparqlResultRow.graph.value] = {asSubject: {}, asObject: {}, asPredicate: {},
              asSubjectExtra: {}, asPredicateExtra: {}, asObjectExtra: {}, showExtra: {},
              asSubjectCount: 0, asPredicateCount: 0, asObjectCount: 0};
            }
            if (!(sparqlResultRow.subject.value in this.describeHash[sparqlResultRow.graph.value].asPredicate)) {
              this.describeHash[sparqlResultRow.graph.value].asPredicate[sparqlResultRow.subject.value] = [];
              this.describeHash[sparqlResultRow.graph.value].asPredicateExtra[sparqlResultRow.subject.value] = [];
              this.describeHash[sparqlResultRow.graph.value].showExtra[sparqlResultRow.subject.value] = false;
            }
            if (this.describeHash[sparqlResultRow.graph.value].asPredicate[sparqlResultRow.subject.value].length < 5) {
              this.describeHash[sparqlResultRow.graph.value].asPredicate[sparqlResultRow.subject.value].push(sparqlResultRow.object.value);
            } else {
              this.describeHash[sparqlResultRow.graph.value].asPredicateExtra[sparqlResultRow.subject.value]
              .push(sparqlResultRow.object.value);
            }
            this.describeHash[sparqlResultRow.graph.value].asPredicateCount++;
          }

          // Only get classes for the graph
          if (!('graph' in sparqlResultRow)) {
            this.graphClasses.push(sparqlResultRow.object.value);
          }
        });
        console.log('describe object:');
        console.log(this.describeHash);
        console.log('describe classes as graph:');
        console.log(this.graphClasses);
      });
  }

}
