import { Component, DoCheck, Input, KeyValueDiffers, OnInit } from '@angular/core';
import { Employee } from '../Employee';

@Component({
  selector: 'app-emp-key-diff',
  templateUrl: './emp-key-diff.component.html',
  styleUrls: ['./emp-key-diff.component.scss']
})
export class EmpKeyDiffComponent implements OnInit,DoCheck {

  @Input()
  empArray = [] as Employee[];
  empDifferMap = new Map<number, any>();
  arrayDiffer: any;
  kvChangeLogs: string[] = [];
  empMap = new Map<number, Employee>();
  constructor(private kvDiffers: KeyValueDiffers) { }

  ngOnInit(): void {
    this.arrayDiffer = this.kvDiffers.find([]).create();
    this.empArray.forEach(emp=>{
      this.empDifferMap.set(emp.id,this.kvDiffers.find(emp).create());
      this.empMap.set(emp.id, emp);
    })
  }
  ngDoCheck() {
    const empArrChanges = this.arrayDiffer.diff(this.empArray);
    if(empArrChanges) {
      empArrChanges.forEachAddedItem((record:any) => {
        let emp = record.currentValue;
        this.empDifferMap.set(emp.id,this.kvDiffers.find(emp).create());
        this.empMap.set(emp.id, emp);
        this.kvChangeLogs.push('Added '+emp.name);
      })
      empArrChanges.forEachRemovedItem((record:any) => {
        let emp = record.previousValue;
        this.empDifferMap.delete(emp.id);
        this.empMap.delete(emp.id);
        this.kvChangeLogs.push('Removed' + emp.name);
      })
    }
    for(let [key,empDiffer] of this.empDifferMap) {
      const empChanges = empDiffer.diff(this.empMap.get(key));
      if(empChanges) {
        empChanges.forEachChangedItem((record:any)=>{
          this.kvChangeLogs.push('---Update (id='+ key + ')---');
          this.kvChangeLogs.push('Previous Value: ' + record.previousValue);
          this.kvChangeLogs.push('Current Value: ' + record.currentValue);
          this.kvChangeLogs.push('-----------------------');
        });
      }
    }
  }
}
