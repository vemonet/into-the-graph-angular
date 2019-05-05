import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DatasetsInfoService } from '../../datasets-info.service';

@Component({
  selector: 'app-dataset-details',
  templateUrl: './dataset-details.component.html',
  styleUrls: ['./dataset-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatasetDetailsComponent implements OnInit {

  numberOfTicks = 0;

  constructor(
    private ref: ChangeDetectorRef,
    private router: Router,
    private route: ActivatedRoute,
    private datasetsInfo: DatasetsInfoService) {
      setInterval(() => {
        this.numberOfTicks++;
        // require view to be updated
        this.ref.markForCheck();
      }, 1000);
     }

  ngOnInit() {
    console.log('ngOnInit');
    this.datasetsInfo.datasets = this.router.getNavigatedData().datasets;
    //this.datasetsInfo.datasetSelected = this.router.getNavigatedData().datasetSelected;
    console.log(this.datasetsInfo.datasets);

    // Keep only the info of the selected dataset
    this.datasetsInfo.datasetSelected = this.datasetsInfo.datasets.filter(
      dataset => dataset.source.value === this.route.snapshot.paramMap.get('datasetId'))[0];
    console.log('Selected dataset:');
    console.log(this.datasetsInfo.datasetSelected);
    //this.datasetsInfo.datasetSelected = this.datasetsInfo.datasets.datasetId(this.datasetId);
  }


}
