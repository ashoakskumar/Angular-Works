import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.scss']
})
export class NumberComponent implements OnInit {

  msg:string = '';
  counter: number = 0;
  constructor() { }

  ngOnInit(): void {
  }
  public increaseByOne() {
    this.counter = this.counter +1;
    this.msg = 'Count: ' + this.counter;
  }
  public decreaseByOne() {
    this.counter = this.counter - 1;
    this.msg = 'Count: ' + this.counter;
  }
}
