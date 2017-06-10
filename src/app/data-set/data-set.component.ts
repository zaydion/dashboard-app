import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

import { DragulaService } from 'ng2-dragula/ng2-dragula';

import { DataSet } from 'app/dataset';

@Component({
  selector: 'data-set',
  templateUrl: './data-set.component.html',
  styleUrls: ['./data-set.component.css']
})
export class DataSetComponent {
  measure: string;
  dimension: string;


 constructor(
    private dragulaService: DragulaService
  ) {

      dragulaService.drag.subscribe(value => {
       console.log(value);
      });

      // dragulaService.setOptions('measure', {
      //   accepts: (el, target, source, sibling) {
      //    // dragulaService.remove(sibling);
      //   }
      // });

      dragulaService.drop.subscribe(value => {
         let [bagName, element, container, sibling] = value;
         console.log(sibling)
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

  @Input()
  dataset: DataSet;

}
