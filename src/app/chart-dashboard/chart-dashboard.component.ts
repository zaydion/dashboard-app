import { Component, OnInit } from '@angular/core';

import { DragulaService } from 'ng2-dragula/ng2-dragula';

import { DataSource } from 'app/datasource';
import { DataSet } from 'app/dataset';
import { DataSourceService } from 'app/datasource.service';

@Component({
  selector: 'app-chart-dashboard',
  templateUrl: './chart-dashboard.component.html',
  styleUrls: ['./chart-dashboard.component.css'],
  providers: [DataSourceService]
})
export class ChartDashboardComponent implements OnInit {
  datasources: DataSource[];
  selectedDataSource: DataSource;
  selectedDataSet: DataSet;
  measure: string;
  dimension: string;

  constructor(
    private dataSourceService: DataSourceService,
    private dragulaService: DragulaService
  ) {
      dragulaService.drop.subscribe(value => {
       let [bagName, element] = value.slice(0, 2);
        console.log(bagName);
        console.log(element.innerText);

        if(bagName === "measure") {
          this.measure = element.innerText;
        } else if(bagName === "dimension") {
          this.dimension = element.innerText;
        }
      });
    }

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
    this.selectedDataSet = new DataSet();
    this.selectedDataSource = datasource;
  }

  selectDataSet(dataset: DataSet) {
    console.log(`${dataset.name} has been selected`);
    this.selectedDataSet = dataset;
  }

}
