import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppSecondComponent } from './app-second/app-second.component';
import { AppFirstComponent } from './app.first/app.first.component';

const routes: Routes = [  
  { path: '', component: AppFirstComponent }, 
  { path: 'second', component: AppSecondComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],                              
  exports: [RouterModule]
})
export class AppRoutingModule { }
