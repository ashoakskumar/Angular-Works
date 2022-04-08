import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArticleComponent } from './article/article.component';
import { StudentModuleModule } from './student-module/student-module.module';
import { PersonModuleModule } from './person-module/person-module.module';
import { PersonServiceService } from './person-module/person-service.service';
import { TemplateExampleComponent } from './template/template-example/template-example.component';
import { LoadModule } from './load/load.module';
import { ChangeDetectModule } from './change-detect/change-detect.module';
import { ProviderModuleModule } from './provider-module/provider-module.module';
@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    TemplateExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //InMemoryWebApiModule.forRoot(TestData),
    HttpClientModule,
    ReactiveFormsModule,
    StudentModuleModule,
    FormsModule,
    PersonModuleModule,
    LoadModule,
    ChangeDetectModule,
    ProviderModuleModule
  ],
  providers: [
    PersonServiceService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
