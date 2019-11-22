import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatasetsOverviewComponent } from './datasets-overview/datasets-overview.component';
import { DatasetDetailsComponent } from './dataset-details/dataset-details.component';
import { SparqlComponent } from './sparql/sparql.component';
import { DescribeComponent } from './describe/describe.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', component: DatasetsOverviewComponent},
  { path: 'sparql', component: SparqlComponent},
  { path: 'dataset/:datasetId', component: DatasetDetailsComponent},
  { path: 'describe', component: DescribeComponent},
  { path: 'search/:searchText', component: SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
