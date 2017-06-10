import { Component, OnInit } from '@angular/core';


import { DataSource } from 'app/datasource';
import { DataSet } from 'app/dataset';
import { DataSourceService } from 'app/datasource.service';

@Component({
  selector: 'data-sources',
  templateUrl: './data-sources.component.html',
  styleUrls: ['./data-sources.component.css']
})

export class DataSourcesComponent implements OnInit {
  datasources: DataSource[];
  measure: string;
  dimension: string;

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


}
