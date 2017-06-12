import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

import { DragulaService } from 'ng2-dragula/ng2-dragula';

import { DataSet } from 'app/dataset';
import { flyIn } from './animations';

@Component({
  selector: 'field-list',
  templateUrl: './field-list.component.html',
  styleUrls: ['./field-list.component.css'],
  animations: [flyIn]
})
export class FieldListComponent implements OnInit {
  dragulaTitle: string;
  selectedMeasure: string;
  selectedDimension: string;

  @Input()
  title: string;

  @Input()
  fields: string[];

  constructor(
    private dragulaService: DragulaService
  ) {

    // dragulaService.setOptions('measures-bag', {
    //   accepts: this._accepts(element, target, source, sibling)
    // });

      dragulaService.drop.subscribe(value => {
        let [bagName, element, source, sibling] = value;

        dragulaService.setOptions(bagName, {
          accepts: !element.classList.contains("dropped")
        })
        if(bagName === "measures-bag") {
         this.selectedMeasure = element.innerHTML;
        } else if(bagName === "dimensions-bag") {
         this.selectedDimension = element.innerHTML;
        }

        element.classList.add("dropped");
        console.log(element.classList);
      });
    }

  ngOnInit() {
    this._makeDragulaTitle(this.title);
  }

  turnOnRevert(): void {
    let bag = this.dragulaService.find('measures-bag');
    console.log(bag.drake.containers);
    bag.drake.containers.splice(0,1);
    console.log(bag.drake.containers);
  }

  private
  _makeDragulaTitle(title: string): void {
    this.dragulaTitle = `${title}-bag`;
  }

  _accepts(el: any, target: any, source: any, sibling: any): boolean {
    if(!sibling) {
      return true;
    }
  }
}
