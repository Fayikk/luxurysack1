import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './component/navi/navi/navi.component';
import { CategoryComponent } from './component/category/category.component';
import { ProductComponent } from './component/product/product.component';
import { BrandComponent } from './component/brand/brand.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FilterpipePipe } from './pipes/filterpipe.pipe'//import ediyoruz
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { Filterpipe1Pipe } from './pipes/filterpipe1.pipe';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartsummaryComponent } from './component/cartsummary/cartsummary.component';
import { ProductAddComponent } from './component/product-add/product-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './component/login/login.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { RegisterComponent } from './component/register/register/register.component';

@NgModule({ 
  declarations: [
    AppComponent,
    NaviComponent,
    CategoryComponent,
    ProductComponent,
    BrandComponent,
    VatAddedPipe,
    FilterpipePipe,
    Filterpipe1Pipe,
    CartsummaryComponent,
    ProductAddComponent,
    LoginComponent,
    RegisterComponent,

    // Observable
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    }),
    ReactiveFormsModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
