import { Component } from '@angular/core';
import { DatasetsInfoService } from '../datasets-info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rdf-graph-explorer';

  constructor(private datasetsInfo: DatasetsInfoService) { }

  applyFilterNav(filterValue: string) {
    let arr = [];
    const datasetArray = this.datasetsInfo.datasets;
    Object.keys(datasetArray).map(function(key){
      arr.push(datasetArray[key].source.value);
      return arr;
    });
    this.datasetsInfo.arrayDatasetsNav = arr;

    this.datasetsInfo.arrayDatasetsNav = this.datasetsInfo.arrayDatasetsNav
      .filter(item => item.includes(filterValue.trim().toLowerCase()));
    console.log('after filter');
    console.log(this.datasetsInfo.arrayDatasetsNav);
  }
}
