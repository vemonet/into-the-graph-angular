import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatasetsOverviewComponent } from './datasets-overview/datasets-overview.component';
import { DatasetDetailsComponent } from './dataset-details/dataset-details.component';
import { SparqlComponent } from './sparql/sparql.component';

const routes: Routes = [
  { path: '', component: DatasetsOverviewComponent},
  { path: 'sparql', component: SparqlComponent},
  { path: 'dataset/:datasetId', component: DatasetDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
