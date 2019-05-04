import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Deactivate animations: import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatCheckboxModule,
  MatProgressSpinnerModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatSortModule,
  MatTableModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatasetsOverviewComponent } from './datasets-overview/datasets-overview.component';

@NgModule({
  declarations: [
    AppComponent,
    DatasetsOverviewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
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
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
