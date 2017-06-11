import { Component, EventEmitter, Input, Output } from '@angular/core';


import { DataSource } from 'app/datasource';
import { DataSet } from 'app/dataset';

@Component({
  selector: 'data-set-list',
  templateUrl: './data-set-list.component.html',
  styleUrls: ['./data-set-list.component.css']
})

export class DataSetListComponent {
  measure: string;
  dimension: string;
  selectedDataSet: DataSet;

  @Input()
  datasets: DataSet[];

  constructor() {}

  selectDataSet(dataset: DataSet) {
    console.log(`${dataset.name} has been selected`);
    this.selectedDataSet = dataset;
  }

}
