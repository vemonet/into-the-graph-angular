import { Component } from '@angular/core';
import { DatasetsInfoService } from '../datasets-info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rdf-graph-explorer';

  constructor(private datasetsInfo: DatasetsInfoService) { }

  applyFilterNav(filterValue: string) {
    // Keep only the info of the selected dataset
    //this.datasetsInfo.arrayDatasetsNav = this.datasetsInfo.datasets.filter(
    // dataset => dataset.source.value === filterValue);
    console.log('fiiiilter');
    console.log(this.datasetsInfo.datasets);
    //this.datasetsInfo.arrayDatasetsNav.filter = filterValue.trim().toLowerCase();
    // let arr = [];
    // const datasetArray = this.datasetsInfo.datasets;
    // Object.keys(datasetArray).map(function(key){
    //   arr.push(datasetArray[key].source.value);
    //   return arr;
    // });
    // this.datasetsInfo.arrayDatasetsNav = arr;
    console.log(this.datasetsInfo.arrayDatasetsNav);
    // WORKING: this.datasetsInfo.arrayDatasetsNav = this.datasetsInfo.arrayDatasetsNav.filter(item => item.includes(filterValue.trim().toLowerCase()));

    let arr = [];
    const datasetArray = this.datasetsInfo.datasets;
    Object.keys(datasetArray).map(function(key){
      arr.push(datasetArray[key].source.value);
      return arr;
    });
    this.datasetsInfo.arrayDatasetsNav = arr;
    this.datasetsInfo.arrayDatasetsNav = this.datasetsInfo.arrayDatasetsNav;

    this.datasetsInfo.arrayDatasetsNav = this.datasetsInfo.arrayDatasetsNav
      .filter(item => item.includes(filterValue.trim().toLowerCase()));
    console.log('after filter');
    console.log(this.datasetsInfo.arrayDatasetsNav);
  }

  // assignCopy(){
  //   this.datasetsInfo.filteredArrayDatasetsNav = Object.assign([], this.datasetsInfo.arrayDatasetsNav);
  // }
  // filterItem(value){
  //     if(!value){
  //         this.assignCopy();
  //     } // when nothing has typed
  //     this.datasetsInfo.filteredArrayDatasetsNav = Object.assign([], this.datasetsInfo.arrayDatasetsNav).filter(
  //       item => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1
  //     )
  // }

}
