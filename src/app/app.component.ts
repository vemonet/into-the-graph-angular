import { Component } from '@angular/core';
import { DatasetsInfoService } from '../datasets-info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'into-the-graph';

  constructor(private datasetsInfo: DatasetsInfoService) { }

  applyFilterNav(filterValue: string) {
    this.datasetsInfo.arrayDatasetsNav = Object.keys(this.datasetsInfo.hashAll);

    this.datasetsInfo.arrayDatasetsNav = this.datasetsInfo.arrayDatasetsNav
      .filter(item => item.includes(filterValue.trim().toLowerCase()));
    console.log('after filter');
    console.log(this.datasetsInfo.arrayDatasetsNav);
  }
}
