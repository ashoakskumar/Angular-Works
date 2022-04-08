import { Component, OnInit, ViewChild } from '@angular/core';
import { NumberComponent } from '../number/number.component';

@Component({
  selector: 'app-number-parent',
  templateUrl: './number-parent.component.html',
  styleUrls: ['./number-parent.component.scss']
})
export class NumberParentComponent implements OnInit {

  @ViewChild(NumberComponent)
  private numberComponent = {} as NumberComponent;
  constructor() { }

  ngOnInit(): void {
  }
  increase() {
    this.numberComponent.increaseByOne();
  }
  decrease() {
    this.numberComponent.decreaseByOne();
  }
}
