import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-describe',
  templateUrl: './describe.component.html',
  styleUrls: ['./describe.component.scss']
})
export class DescribeComponent implements OnInit {
  describeUri: string;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.describeUri = params.uri;
      console.log(this.describeUri); // Print the parameter to the console. 
    });
  }

  ngOnInit() {
  }

}
