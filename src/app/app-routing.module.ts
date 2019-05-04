import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatasetsOverviewComponent } from './datasets-overview/datasets-overview.component';

const routes: Routes = [
  { path: '', component: DatasetsOverviewComponent}
  //{ path: 'about', component: AboutComponent },
  // For params: { path: 'contact/:id', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
