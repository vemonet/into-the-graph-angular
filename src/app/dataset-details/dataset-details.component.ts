import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DatasetsInfoService } from '../../datasets-info.service';

@Component({
  selector: 'app-dataset-details',
  templateUrl: './dataset-details.component.html',
  styleUrls: ['./dataset-details.component.scss']
})
export class DatasetDetailsComponent implements OnInit {

  dataSource;
  datasetId: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private datasetsInfo: DatasetsInfoService) { }

  ngOnInit() {
    console.log('ngOnInit');
    this.datasetId = this.route.snapshot.paramMap.get('datasetId');
    this.datasetsInfo.datasets = this.router.getNavigatedData();
    console.log(this.datasetId);
    console.log(this.datasetsInfo.datasets);

    // Keep only the info of the selected dataset
    this.datasetsInfo.datasetSelected = this.datasetsInfo.datasets.filter(
      dataset => dataset.source.value === this.datasetId)[0];
    console.log('Selected dataset:');
    console.log(this.datasetsInfo.datasetSelected);
    //this.datasetsInfo.datasetSelected = this.datasetsInfo.datasets.datasetId(this.datasetId);
    this.dataSource = this.datasetsInfo.datasetSelected;
  }


}
