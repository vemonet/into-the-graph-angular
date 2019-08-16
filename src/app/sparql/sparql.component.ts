import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
//  OnInit
declare const YASGUI: any;

@Component({
  selector: 'app-sparql',
  templateUrl: './sparql.component.html',
  styleUrls: [
    './sparql.component.scss'
    //'../../assets/css/yasgui.min.css'
  ]
})
export class SparqlComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
    console.log('teeest');
    YASGUI.defaults.yasqe.sparql.endpoint = 'http://graphdb.dumontierlab.com/repositories/test';
    //var config = {"api":{"urlShortener":"//yasgui.org/shorten"}};
    var yasgui = YASGUI(document.getElementById('yasguiDiv'));
  }
}
