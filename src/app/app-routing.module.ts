import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './core/about/about.component';
import { E404Component } from './core/e404/e404.component';
import { HomeComponent } from './core/home/home.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { RequestCreateComponent } from './request/request-create/request-create.component';
import { RequestDetailComponent } from './request/request-detail/request-detail.component';
import { RequestLinesComponent } from './request/request-lines/request-lines.component';
import { RequestListComponent } from './request/request-list/request-list.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'user-list', component:UserListComponent},
  {path:'user-create', component:UserCreateComponent},
  {path:'product-list', component:ProductListComponent},
  {path: 'product-create', component:ProductCreateComponent},
  {path:'vendor-list', component:VendorListComponent},
  {path:'vendor-create', component:VendorCreateComponent},
  {path:'request-create', component:RequestCreateComponent},
  {path:'request-list', component:RequestListComponent},
  {path:'request-lines', component:RequestLinesComponent},
  {path:'user-detail/:id', component:UserDetailComponent},
  {path:'product-detail/:id', component:ProductDetailComponent},
  {path:'vendor-detail/:id', component:VendorDetailComponent},
  {path:'request-detail/:id', component:RequestDetailComponent},
  {path:'user-edit/:id', component:UserEditComponent},
  {path:'product-edit/:id', component:ProductEditComponent},
  {path:'vendor-edit/:id', component:VendorEditComponent},
  {path:'user-login', component:UserLoginComponent},
  {path:'**', component:E404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
