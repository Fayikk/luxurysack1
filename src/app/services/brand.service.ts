import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Brand } from '../models/Brand';
import { ListResponseModel } from '../models/ListResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl="https://localhost:44313/api/"

  constructor(private httpClient:HttpClient,
              private activatedRoute:ActivatedRoute
              ) { }
//https://localhost:44313/api/Brands/List
// https://localhost:44313/api/Brands/CheckBrandId?Id=5
//https://localhost:44313/api/Brands/CheckBrandId?Id=1'
  getBrands():Observable<ListResponseModel<Brand>>{
    let newPath = this.apiUrl +"Brands/List"
    return this.httpClient.
    get<ListResponseModel<Brand>>(newPath)
  }
  getBrandsByCategory(brandId:number){
    let newPath = this.apiUrl +"Brands/CheckBrandId?Id="+brandId
    return this.httpClient.
    get<ListResponseModel<Brand>>(newPath)
  }


}
