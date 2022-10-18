import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/loginModel';
import { SingleResponseModel } from '../models/SingleResponseModel';
import { TokenModel } from '../models/tokenModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }
  //Request URL
//https:localhost:44313/api/Auth/Register,
//https://localhost:44313/api/Auth/login
  apiUrl="https://localhost:44313/api/Auth/"

  login(user:LoginModel){
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl+"login",user)
  }

  isAuthenticated(){
    if (localStorage.getItem("token")) {
      return true;
    }
    else{
      return false;
    }
  }
}
