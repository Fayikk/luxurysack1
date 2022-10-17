import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/Category';

import { ListResponseModel } from '../models/ListResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient:HttpClient)//bu modül api ile iletişim kurmamıza yaramaktadır.
   { }

  apiUrl="https://localhost:44313/api/Categories/List"
  
  getCategories():Observable<ListResponseModel<Category>>{
    return this.httpClient.get<ListResponseModel<Category>>(this.apiUrl)
    //backend iletişimi kurduğumuz yer burasıdır.
  }



  }
