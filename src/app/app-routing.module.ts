import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatasetsOverviewComponent } from './datasets-overview/datasets-overview.component';

const routes: Routes = [
  { path: '', component: DatasetsOverviewComponent},
  { path: 'dataset/:datasetId', component: DatasetsOverviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
