import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './component/brand/brand.component';
import { CategoryComponent } from './component/category/category.component';
import { LoginComponent } from './component/login/login.component';
import { ProductAddComponent } from './component/product-add/product-add.component';

import { ProductComponent } from './component/product/product.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [//yönelendirmeleri bu class içerisinde gerçekleştirmekteyiz.
  {path:"",pathMatch:"full",component:BrandComponent},//sayfanın sonuna herhangşi bir etmenden bağımsız olarak bu baştaki gibi yazılırsa
  //ilgili component' yönlendir anlamına gelmektedir.
  {path:"brands",component:BrandComponent},
  {path:"categories/brand/:brandId",component:BrandComponent},
  {path:"products",component:ProductComponent},
  {path:"products/brand/category/:productId",component:ProductComponent},
  {path:"products",component:ProductComponent},
  {path:"login",component:LoginComponent},
  {path:"products/add",component:ProductAddComponent,canActivate:[LoginGuard]}



  // /brands/category//categories/brand/
  
];//Hatırlarsanız bizim html'de router-outlet 'şn yönlendirilme işlemleri burada gerçekleştirilmektedir.

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
