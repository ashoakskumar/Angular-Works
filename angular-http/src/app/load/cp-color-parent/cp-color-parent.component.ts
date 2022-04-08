import { Component, OnInit, ViewChild } from '@angular/core';
import { CpColorDirective } from '../cp-color.directive';

@Component({
  selector: 'app-cp-color-parent',
  templateUrl: './cp-color-parent.component.html',
  styleUrls: ['./cp-color-parent.component.scss']
})
export class CpColorParentComponent implements OnInit {

  @ViewChild(CpColorDirective)
  cpColorDirective ={} as CpColorDirective;
  constructor() { }

  ngOnInit(): void {
  }
  changeColor(color:string) {
    this.cpColorDirective.changeColor(color);
  }
}
