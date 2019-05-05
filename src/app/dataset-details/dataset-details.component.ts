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
    console.log('before ngOnInit dataset-detail. datasetsInfo:');
    const navigatedData = this.router.getNavigatedData();
    if (navigatedData == null) {
      // Execute SPARQL query to get datasets infos
      console.log('no navigatedData. execute sparql');
      this.sparql.getAllDatasetsInfo(null, this.route.snapshot.paramMap.get('datasetId'));
    } else {
      // Get datasets infos from data passed through router
      this.datasetsInfo.datasets = navigatedData.datasets;
      this.datasetsInfo.datasetSelected = navigatedData.datasetSelected;
      this.datasetsInfo.arrayDatasetsNav = navigatedData.arrayDatasetsNav;
      this.datasetsInfo.filteredArrayDatasetsNav = navigatedData.filteredArrayDatasetsNav;
    }
    console.log('after ngOnInit dataset-detail. datasetsInfo:')
    console.log(this.datasetsInfo);
  }
}
