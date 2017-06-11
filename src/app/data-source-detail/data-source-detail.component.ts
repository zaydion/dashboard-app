import { Component, EventEmitter, Input, Output } from '@angular/core';

import { DataSet } from 'app/dataset';
import { DataSource } from 'app/datasource';
import { DataSourceService } from 'app/datasource.service';


@Component({
  selector: 'data-source-detail',
  templateUrl: './data-source-detail.component.html',
  styleUrls: ['./data-source-detail.component.css']
})

export class DataSourceDetailComponent {
  selectedDataSource: DataSource;

  @Input()
  datasource: DataSource;

  constructor(private dataSourceService: DataSourceService) {}

  selectDataSource(datasource: DataSource) {
    console.log(`${datasource.name} has been selected`);
    this.selectedDataSource = datasource;
  }

}
