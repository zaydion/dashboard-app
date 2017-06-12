import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

import { DragulaService } from 'ng2-dragula/ng2-dragula';

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
      dragulaService.drop.subscribe(value => {
        let [bagName, node, dropZone, sourceZone] = value;

        if (dropZone.children.length > 1) {
          // decide which item to move back to sourceZone
          let nodeToMoveBack = dropZone.children[0];
          if (nodeToMoveBack === node) {
            nodeToMoveBack = dropZone.children[1];
          }
          // actually move item back to sourcezone
          if (!dropZone.classList.contains("field-list")) {
            sourceZone.appendChild(nodeToMoveBack);
          }
        }

        // set selected field
        if (bagName === "measures-bag") {
         this.selectedMeasure = node.innerHTML;
        } else if (bagName === "dimensions-bag") {
         this.selectedDimension = node.innerHTML;
        }
      });
    }

  ngOnInit() {
    this._makeDragulaTitle(this.title);
  }

  private
  _makeDragulaTitle(title: string): void {
    this.dragulaTitle = `${title}-bag`;
  }

}
