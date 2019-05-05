import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DatasetsInfoService } from '../../datasets-info.service';
import { SparqlService } from '../../sparql.service';

@Component({
  selector: 'app-dataset-details',
  templateUrl: './dataset-details.component.html',
  styleUrls: ['./dataset-details.component.scss'],
})
export class DatasetDetailsComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private sparql: SparqlService,
    private datasetsInfo: DatasetsInfoService) { }

  ngOnInit() {
    console.log('ngOnInit dataset-detail. datasetsInfo:');
    const navigatedData = this.router.getNavigatedData();
    if (navigatedData == null) {
      // Execute SPARQL query to get datasets infos
      console.log('execute sparqllll');
      this.sparql.getAllDatasetsInfo(null, this.route.snapshot.paramMap.get('datasetId'));
    } else {
      // Get datasets infos from data passed through router
      console.log('navigatedData');
      console.log(navigatedData);
      this.datasetsInfo.datasets = navigatedData.datasets;
      this.datasetsInfo.datasetSelected = navigatedData.datasetSelected;
      this.datasetsInfo.arrayDatasetsNav = navigatedData.arrayDatasetsNav;
      this.datasetsInfo.filteredArrayDatasetsNav = navigatedData.filteredArrayDatasetsNav;
    }
    console.log(this.datasetsInfo);

    // Do it in services. But will be required to come directly in the dataset page
    //this.datasetsInfo.datasetSelected = this.datasetsInfo.datasets.filter(
    //  datasetFilter => datasetFilter.source.value === this.router.snapshot.paramMap.get('datasetId'))[0];
    console.log('Selected dataset:');
    console.log(this.datasetsInfo.datasetSelected);
    //this.datasetsInfo.datasetSelected = this.datasetsInfo.datasets.datasetId(this.datasetId);
  }

}
