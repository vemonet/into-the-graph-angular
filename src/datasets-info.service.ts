import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatasetsInfoService {

  datasetSelected: string;
  datasets: any;

  constructor() { }
}
