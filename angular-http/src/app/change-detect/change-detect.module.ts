import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpKeyDiffComponent } from './emp-key-diff/emp-key-diff.component';
import { EmpItrDiffComponent } from './emp-itr-diff/emp-itr-diff.component';
import { EmpDashboardComponent } from './emp-dashboard/emp-dashboard.component';
import { WorkerComponent } from './worker/worker.component';
import { WorkerDashboardComponent } from './worker-dashboard/worker-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EmpKeyDiffComponent,
    EmpItrDiffComponent,
    EmpDashboardComponent,
    WorkerComponent,
    WorkerDashboardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [EmpDashboardComponent,WorkerDashboardComponent]
})
export class ChangeDetectModule { }
