import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/tooltip';
// Deactivate animations: import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatSortModule,
  MatTableModule,
  MatCheckboxModule, MatSidenavModule, MatListModule,
  MatExpansionModule
} from '@angular/material';
import 'angular2-navigate-with-data';
import { CytoscapeModule } from 'ngx-cytoscape';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatasetsOverviewComponent } from './datasets-overview/datasets-overview.component';
import { DatasetDetailsComponent } from './dataset-details/dataset-details.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MainNavComponent } from './main-nav/main-nav.component';
import { SparqlComponent } from './sparql/sparql.component';
import { DescribeComponent } from './describe/describe.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    DatasetsOverviewComponent,
    DatasetDetailsComponent,
    MainNavComponent,
    SparqlComponent,
    DescribeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule,
    MatCheckboxModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    CytoscapeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
