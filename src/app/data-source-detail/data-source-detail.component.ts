import { Component, EventEmitter, Input, Output } from '@angular/core';

import { DataSet } from 'app/dataset';
import { DataSource } from 'app/datasource';
import { DataSourceService } from 'app/datasource.service';


@Component({
  selector: 'data-source',
  templateUrl: './data-source.component.html',
  styleUrls: ['./data-source.component.css']
})

export class DataSourceComponent {
  dataset: DataSet;
  selectedDataSource: DataSource;


  constructor(private dataSourceService: DataSourceService) {}

  @Input()
  datasources: DataSource[];

  selectDataSource(datasource: DataSource) {
    console.log(`${datasource.name} has been selected`);
    this.selectedDataSource = datasource;
  }

}
