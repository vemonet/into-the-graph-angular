import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-datasets-overview',
  templateUrl: './datasets-overview.component.html',
  styleUrls: ['./datasets-overview.component.scss'],
})
export class DatasetsOverviewComponent implements OnInit {

  dataSource;
  displayedColumns = [];
  @ViewChild(MatSort) sort: MatSort;

  /**
   * Pre-defined columns list for user table
   */
  columnNames = [{
    id: "position",
    value: "No."

  }, {
    id: "name",
    value: "Name"
  },
  {
    id: "weight",
    value: "Weight"
  },
  {
    id: "symbol",
    value: "Symbol"
  }];

  ngOnInit() {
    this.displayedColumns = this.columnNames.map(x => x.id);
    this.createTable();
  }

  createTable() {
    let tableArr: Element[] = [{ position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' }
    ];
    this.dataSource = new MatTableDataSource(tableArr);
    this.dataSource.sort = this.sort;
  }
}

export interface Element {
  position: number,
  name: string,
  weight: number,
  symbol: string
}
