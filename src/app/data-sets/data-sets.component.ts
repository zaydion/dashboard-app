import { Component, EventEmitter, Input, Output } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { DataSource } from 'app/datasource';
import { DataSet } from 'app/dataset';

@Component({
  selector: 'data-sets',
  templateUrl: './data-sets.component.html',
  styleUrls: ['./data-sets.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({transform: 'translateX(100%)'}))
      ])
     ])
  ]
})
export class DataSetsComponent {
  selectedDataSet: DataSet;

  @Input()
  datasource: DataSource;

  selectDataSet(dataset: DataSet) {
    console.log(`${dataset.name} has been selected`);
    this.selectedDataSet = dataset;
  }
}
