import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Worker } from '../Worker';

@Component({
  selector: 'app-worker-dashboard',
  templateUrl: './worker-dashboard.component.html',
  styleUrls: ['./worker-dashboard.component.scss']
})
export class WorkerDashboardComponent implements OnInit {

  work:Worker =new Worker('Ashok',35);
  msg = 'Hello World';
  group = {} as FormGroup;
  constructor(private fg: FormBuilder) { }

  ngOnInit(): void {
    this.group = this.fg.group({
      name : '',
      age : ''
    })
  }
  onFormSubmit() {
      let name = this.group?.get('name')?.value;
      let age = this.group?.get('age')?.value;
      this.work = new Worker(name,age);
    }
}
