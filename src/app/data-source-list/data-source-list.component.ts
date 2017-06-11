import { Component, OnInit } from '@angular/core';

import { DataSource } from 'app/datasource';
import { DataSet } from 'app/dataset';
import { DataSourceService } from 'app/datasource.service';

@Component({
  selector: 'data-source-list',
  templateUrl: './data-source-list.component.html',
  styleUrls: ['./data-source-list.component.css']
})

export class DataSourceListComponent implements OnInit {
  datasources: DataSource[];
  measure: string;
  dimension: string;
  selectedDataSource: DataSource;

  constructor(
    private dataSourceService: DataSourceService
  ) {}

  ngOnInit() {
    this.getDataSources();
  }

  getDataSources() {
    this.dataSourceService.getDataSources()
                          .then(
                            datasources => this.datasources = datasources
                          );
  }


  selectDataSource(datasource: DataSource) {
    console.log(`${datasource.name} has been selected`);
    this.selectedDataSource = datasource;
  }

}
