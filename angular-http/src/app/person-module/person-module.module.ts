import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { PersonComponent } from './person/person.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NameValidatorDirective } from './name-validator.directive';
import { AgeValidatorDirective } from './age-validator.directive';
import { PersonServiceService } from './person-service.service';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';
import { RepeatPipePipe } from './repeat-pipe.pipe';
import { PersonService } from './person.service';
import { PersonData } from './PersonData';



@NgModule({
  declarations: [
    PersonComponent,
    NameValidatorDirective,
    AgeValidatorDirective,
    PipeExampleComponent,
    RepeatPipePipe
  ], imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    PersonServiceService,DatePipe,RepeatPipePipe,PersonService
],
  exports: [PersonComponent,PipeExampleComponent]
})
export class PersonModuleModule { }
