import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DatasetsInfoService } from '../../datasets-info.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {
  title = 'rdf-graph-explorer';

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver,
              private datasetsInfo: DatasetsInfoService) {}

  applyFilterNav(filterValue: string) {
    this.datasetsInfo.arrayDatasetsNav = Object.keys(this.datasetsInfo.hashAll);

    this.datasetsInfo.arrayDatasetsNav = this.datasetsInfo.arrayDatasetsNav
      .filter(item => item.includes(filterValue.trim().toLowerCase()));
    console.log('after filter');
    console.log(this.datasetsInfo.arrayDatasetsNav);
  }
}
