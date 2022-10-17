import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './component/brand/brand.component';
import { CategoryComponent } from './component/category/category.component';
import { ProductComponent } from './component/product/product.component';

const routes: Routes = [//yönelendirmeleri bu class içerisinde gerçekleştirmekteyiz.
  {path:"",pathMatch:"full",component:BrandComponent},//sayfanın sonuna herhangşi bir etmenden bağımsız olarak bu baştaki gibi yazılırsa
  //ilgili component' yönlendir anlamına gelmektedir.
  {path:"brands",component:BrandComponent},
  {path:"brands/category/:brandId",component:BrandComponent},
  {path:"products",component:ProductComponent}

  // /brands/category/
  
];//Hatırlarsanız bizim html'de router-outlet 'şn yönlendirilme işlemleri burada gerçekleştirilmektedir.

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
