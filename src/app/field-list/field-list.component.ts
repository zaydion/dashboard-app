import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { DragulaService } from 'ng2-dragula/ng2-dragula';

import { DataSet } from 'app/dataset';

@Component({
  selector: 'field-list',
  templateUrl: './field-list.component.html',
  styleUrls: ['./field-list.component.css'],
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
export class FieldListComponent implements OnInit {
  dragulaTitle: string;

  @Input()
  title: string;

  @Input()
  fields: string[];

  constructor(
    private dragulaService: DragulaService
  ) {
      dragulaService.drop.subscribe(value => {
         let [bagName, element, container, sibling] = value;
         console.log(sibling);
         console.log(container.children);

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
