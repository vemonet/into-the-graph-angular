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

}
