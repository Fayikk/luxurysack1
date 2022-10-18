import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ListResponseModel } from '../models/ListResponseModel';
import { Product } from '../models/Product';
import { ResponseModel } from '../models/ResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }

apiUrl="https://localhost:44313/api/"
//https://localhost:44313/api/Products/ChechProductId?Id=1
//https://localhost:44313/api/Products/List
//https://localhost:44313/api/Products/Add
  getProducts():Observable<ListResponseModel<Product>>{
    let newPath = this.apiUrl +"Products/List"
    return this.httpClient.
    get<ListResponseModel<Product>>(newPath)
  }

  getProductsByBrand(brandId:number):Observable<ListResponseModel<Product>> {
    let newPath = this.apiUrl + "Products/ChechProductId?Id="+brandId
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }

  add(product:Product):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"Products/Add",product)//burada hangi adrese ne göndereyim anlamına gelmektedir.
  }
 
}
