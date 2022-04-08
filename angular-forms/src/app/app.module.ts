import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserServiceService } from './services/user-service.service';
import { UserComponent } from './user/user/user.component';
import { FormControlsComponent } from './form-controls/form-controls.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroupExampleComponent } from './form-group-example/form-group-example.component';
import { FormBuilderExampleComponent } from './form-builder-example/form-builder-example.component';
import { FormSelectExampleComponent } from './form-select-example/form-select-example.component';
import { FormValidatorExampleComponent } from './form-validator-example/form-validator-example.component';
import { CustomValidatorExampleComponent } from './custom-validator-example/custom-validator-example.component';
import { DecoratorExampleComponent } from './decorator-example/decorator-example.component';
import { NumberComponent } from './decorator-example/number.component';
import { NumberParentComponent } from './decorator-example/number-parent.component';
import { StopWatchParentComponent } from './decorator-example/Watch-Runner/stopwatch-parent.component';
import { StopWatchComponent } from './decorator-example/Watch-Runner/stopwatch.component';
import { CpColorDirective } from './decorator-example/Directive/cpcolor.directive';
import { CpColorParentComponent } from './decorator-example/Directive/cpcolor-parent.component';
import { CpThemeComponent } from './decorator-example/template/cptheme.component';
import { InputOutputExampleComponent } from './input-output-example/input-output-example.component';
import { ParentComponent } from './input-output-example/parent.component';
import { ChildOneComponent } from './input-output-example/childone.component';
import { ChildTwoComponent } from './input-output-example/childtwo.component';
import { RxJsExampleComponent } from './rx-js-example/rx-js-example.component';
import { AppFirstComponent } from './app.first/app.first.component';
import { AppSecondComponent } from './app-second/app-second.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    FormControlsComponent,
    FormGroupExampleComponent,
    FormBuilderExampleComponent,
    FormSelectExampleComponent,
    FormValidatorExampleComponent,
    CustomValidatorExampleComponent,
    DecoratorExampleComponent,
    NumberComponent,
    NumberParentComponent,
    StopWatchParentComponent,
    StopWatchComponent,
    CpColorDirective,
    CpColorParentComponent,
    CpThemeComponent,
    InputOutputExampleComponent,
    ParentComponent,
    ChildOneComponent,
    ChildTwoComponent,
    RxJsExampleComponent,
    AppFirstComponent,
    AppSecondComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
