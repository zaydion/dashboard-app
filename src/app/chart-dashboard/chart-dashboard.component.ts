import { Component, OnInit } from '@angular/core';

import { DataSource } from 'app/datasource';
import { DataSourceService } from 'app/datasource.service';

@Component({
  selector: 'app-chart-dashboard',
  templateUrl: './chart-dashboard.component.html',
  styleUrls: ['./chart-dashboard.component.css'],
  providers: [DataSourceService]
})
export class ChartDashboardComponent implements OnInit {
  datasources: DataSource[];

  constructor(private dataSourceService: DataSourceService) { }

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
