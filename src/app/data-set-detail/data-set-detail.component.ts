import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

import { DragulaService } from 'ng2-dragula/ng2-dragula';

import { DataSet } from 'app/dataset';

@Component({
  selector: 'data-set-detail',
  templateUrl: './data-set-detail.component.html',
  styleUrls: ['./data-set-detail.component.css']
})
export class DataSetDetailComponent {
  measure: string;
  dimension: string;
  selectedDataSet: DataSet;

  @Input()
  dataset: DataSet;

  constructor(
    private dragulaService: DragulaService
  ) {
      dragulaService.drop.subscribe(value => {
         let [bagName, element, container, sibling] = value;
         console.log(sibling);
         console.log(container.children.length);
         if(container.children.length > 1) {
           // dragulaService.destroy("li");
         }
          if(bagName === "measure") {
            this.measure = element.innerText;
          } else if(bagName === "dimension") {
            this.dimension = element.innerText
          }
      });
    }

  selectDataSet(dataset: DataSet) {
    console.log(`${dataset.name} has been selected`);
    this.selectedDataSet = dataset;
  }


}
