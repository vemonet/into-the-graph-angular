import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatasetsInfoService {

  datasetSelected: any;
  datasets: any;

  constructor() { }
}
