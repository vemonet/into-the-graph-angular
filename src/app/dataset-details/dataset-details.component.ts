import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DatasetsInfoService } from '../../datasets-info.service';

@Component({
  selector: 'app-dataset-details',
  templateUrl: './dataset-details.component.html',
  styleUrls: ['./dataset-details.component.scss'],
})
export class DatasetDetailsComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private datasetsInfo: DatasetsInfoService) { }

  ngOnInit() {
    console.log('ngOnInit dataset-detail');
    const navigatedData = this.router.getNavigatedData();
    this.datasetsInfo.datasets = navigatedData.datasets;
    this.datasetsInfo.datasetSelected = navigatedData.datasetSelected;
    this.datasetsInfo.arrayDatasetsNav = navigatedData.arrayDatasetsNav;
    this.datasetsInfo.filteredArrayDatasetsNav = navigatedData.filteredArrayDatasetsNav;
    //this.datasetsInfo.datasetSelected = this.router.getNavigatedData().datasetSelected;
    // Should be done by the sender

    // Do it in services. But will be required to come directly in the dataset page
    //this.datasetsInfo.datasetSelected = this.datasetsInfo.datasets.filter(
    //  dataset => dataset.source.value === this.route.snapshot.paramMap.get('datasetId'))[0];
    console.log('Selected dataset:');
    console.log(this.datasetsInfo.datasetSelected);
    //this.datasetsInfo.datasetSelected = this.datasetsInfo.datasets.datasetId(this.datasetId);
  }

}
