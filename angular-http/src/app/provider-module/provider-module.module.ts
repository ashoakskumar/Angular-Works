import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalDetailsComponent } from './animal-details/animal-details.component';
import { CowComponent } from './cow/cow.component';
import { LionComponent } from './lion/lion.component';
import { AnyAnimalComponent } from './any-animal/any-animal.component';
import { AnimalDashboardComponent } from './animal-dashboard/animal-dashboard.component';
import { ComputerComponent } from './computer/computer.component';
import { BookComponent } from './book/book.component';



@NgModule({
  declarations: [
    AnimalDetailsComponent,
    CowComponent,
    LionComponent,
    AnyAnimalComponent,
    AnimalDashboardComponent,
    ComputerComponent,
    BookComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[AnimalDashboardComponent,ComputerComponent,BookComponent]
})
export class ProviderModuleModule { }
