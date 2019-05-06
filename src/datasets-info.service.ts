import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DatasetsInfoService {

  hashAll: any = {};
  datasets: any;
  datasetSelected: any;
  datasetsTableDataSource: any;
  arrayDatasetsNav: any;
  filteredArrayDatasetsNav: any;

  constructor(private router: Router) { }

  navigateTo(dataset: string) {
    let urlPath: string = '/dataset/' + dataset;
    if (dataset == ''){
      urlPath = '';
    }

    // Keep only the info of the selected dataset
    this.datasetSelected = this.datasets.filter(
      datasetFilter => datasetFilter.source.value === dataset)[0];

    this.router.navigateByData({
      url: [urlPath],
      data: {hashAll: this.hashAll,
        datasets: this.datasets,
        datasetSelected: this.datasetSelected,
        arrayDatasetsNav: this.arrayDatasetsNav,
        filteredArrayDatasetsNav: this.filteredArrayDatasetsNav}
    });
  }
}
