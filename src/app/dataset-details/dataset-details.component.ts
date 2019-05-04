import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

import { SparqlService } from '../../sparql.service';
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
    private datasetsInfo: DatasetsInfoService,
    private sparql: SparqlService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    console.log('ngOnInit');
    this.datasetId = this.route.snapshot.paramMap.get('datasetId');
    this.datasetsInfo.datasetSelected = this.sparql.getDatasetInfos(this.datasetId);
    this.dataSource = this.datasetsInfo.datasetSelected;
  }


}
