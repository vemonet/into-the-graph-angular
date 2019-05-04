import { Injectable } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class DatasetsInfoService {

  datasetSelected: any;
  datasets: any;
  datasetsTableDataSource: any;

  constructor() { }
}
