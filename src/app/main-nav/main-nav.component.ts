import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
//import { DatasetsInfoService } from '../../datasets-info.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {
  title = 'into-the-graph';
  searchForm: FormGroup;

  constructor(private router: Router) {}

  ngOnInit(){
    this.searchForm = new FormGroup({
      SearchText: new FormControl()
    });
  }

  onSubmit(){
    // this.router.navig({
    //   url: ['/search'],
    //   data: { searchText: this.searchForm.get('SearchText').value }
    // });
    this.router.navigate(['/search', encodeURIComponent(this.searchForm.get('SearchText').value)]);
    // this.router.navigate(['/search', this.searchForm.get('SearchText').value]);
  }

}
