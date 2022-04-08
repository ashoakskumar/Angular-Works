import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { 
  //  this.subject = new Subject<number>();
  }
  private data : { [key: string]: any[] } = {};
  setOption(option:any, value:any) {
    debugger;
    this.data[option] = value;
  }

  getOption() {
    return this.data;
  }

  //private subject = new Subject<any>();
  private subject = new BehaviorSubject<string>('null');
    sendMessage(message: string) {
        this.subject.next( message );
    }

    clearMessages() {
        this.subject.next('null');
    }

    getMessage(): Observable<any> {
        return this.subject;
    }


}
