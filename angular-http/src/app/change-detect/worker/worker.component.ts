import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { Worker } from '../Worker';

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.scss']
})
export class WorkerComponent implements OnInit,OnChanges {

  @Input()
  worker:Worker= {} as Worker;
  @Input()
  message = '';
  allMsgChangeLog: string [] = [];
  allWorkerChangeLog: string [] =[];
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges) {
    for(let propName in changes){
      let change = changes[propName];
      let curVal = JSON.stringify(change.currentValue);
      let preVal = JSON.stringify(change.previousValue);
      let changeLog = `${propName}: currentValue = ${curVal}, previousValue = ${preVal}`;
      if(propName === 'message'){
        this.allMsgChangeLog.push(changeLog);
      } else if(propName === 'worker') {
        this.allWorkerChangeLog.push(changeLog);
      }

      console.log('curVal: '+curVal);
      console.log('preVal: '+preVal);
    }
  }
}
