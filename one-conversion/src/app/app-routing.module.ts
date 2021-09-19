import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuardGuard } from './admin-guard.guard';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { CanDeactivateGuard } from './can-deactivate.guard';
import { CountryEditCanDeactivateGuard } from './country-edit-can-deactivate.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductIdComponent } from './product-id/product-id.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductsComponent } from './products/products.component';
const routes: Routes = [
  // {path:"",redirectTo:"products/product-view",pathMatch:"full"},
  // {path:"**",redirectTo:"enroll",pathMatch:"full"},
  //{ path: 'products', component:  ProductsComponent},
  // { path: 'product-view', component:ProductViewComponent},
  // {path:'product-edit', component:ProductEditComponent},
  // {path:'product-ui/:id', component:ProductIdComponent}
  {path:'products', children: [
    {path:'product-view',component:ProductViewComponent}
  ]},
  { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
  {path:'admin',component:AdminHomeComponent, canActivate: [AdminGuardGuard]},
  {
    path:'',
    redirectTo:'/country',
    pathMatch:'full'
  },
  // {
  //   path: '**',
  //   component: PageNotFoundComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CanDeactivateGuard,CountryEditCanDeactivateGuard]
})
export class AppRoutingModule { }
