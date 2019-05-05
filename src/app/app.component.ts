import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatasetsInfoService } from '../datasets-info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rdf-graph-explorer';

  constructor(private datasetsInfo: DatasetsInfoService,
              private router: Router) { }

  navigateToDataset(dataset: string) {
    let urlPath: string = '/dataset/' + dataset;
    if (dataset == ''){
      urlPath = '';
    }

    // Keep only the info of the selected dataset
    this.datasetsInfo.datasetSelected = this.datasetsInfo.datasets.filter(
      datasetFilter => datasetFilter.source.value === dataset)[0];

    this.router.navigateByData({
      url: [urlPath],
      data: {datasets: this.datasetsInfo.datasets, datasetSelected: this.datasetsInfo.datasetSelected}
    });
  }

}
