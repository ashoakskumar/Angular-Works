import { Component, DoCheck, Input, IterableDiffers, OnInit } from '@angular/core';
import { Employee } from '../Employee';

@Component({
  selector: 'app-emp-itr-diff',
  templateUrl: './emp-itr-diff.component.html',
  styleUrls: ['./emp-itr-diff.component.scss']
})
export class EmpItrDiffComponent implements OnInit,DoCheck {

  @Input()
  empArray: Employee[] = [];

  itrChangeLogs: string[] = [];
  empDiffer: any;

  constructor(private itrDiffers: IterableDiffers) { }

  ngOnInit(): void {
    this.empDiffer = this.itrDiffers.find([]).create();
  }
  ngDoCheck() {
    const empArrayChanges = this.empDiffer.diff(this.empArray);
    if(empArrayChanges) {
      empArrayChanges.forEachAddedItem((record:any) => {
        let emp = record.item;
        console.log('Added ' + emp.name);
        this.itrChangeLogs.push('Added '+ emp.name);
      });
      empArrayChanges.forEachRemovedItem((record:any) => {
        let emp = record.item;
        console.log('Removed '+ emp.name);
        this.itrChangeLogs.push('Removed '+emp.name);
      });
    }
  }
}
