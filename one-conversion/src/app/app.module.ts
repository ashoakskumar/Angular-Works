import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightPipe } from './highlight.pipe';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductIdComponent } from './product-id/product-id.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PersonModule } from './person/person.module';
import { CountryModule } from './country/country.module';
import { DialogService } from './dialog.service';

@NgModule({
  declarations: [
    AppComponent,
    HighlightPipe,
    ProductsComponent,
    ProductViewComponent,
    ProductEditComponent,
    ProductIdComponent,
    AdminHomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CountryModule,
    PersonModule,

  ],
  providers: [
   // {provide: LocationStrategy, useClass: HashLocationStrategy}
   DialogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
