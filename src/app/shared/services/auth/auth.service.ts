import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{Login, Register}from'../../interfaces/register'
import { Environment } from '../../../Base/Environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { jwtDecode } from "jwt-decode";





@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: BehaviorSubject<any> = new BehaviorSubject(null)

  constructor(private _HttpClient:HttpClient) {}

  sendRegister(data:Register):Observable<any>
  {
    return this._HttpClient.post(`${Environment.baseURL}/api/v1/auth/signup`,data)
  }

  sendLogin(data:Login):Observable<any>
  {
    return this._HttpClient.post(`${Environment.baseURL}/api/v1/auth/signin`,data)
  }


  userInform(){
     this.userData.next(jwtDecode(JSON.stringify(localStorage.getItem("userToken")) ));

     console.log(this.userData.getValue())

  }


// ========forget password===========


// sendVerifyAPI(data:any):Observable<any>
// {
//   return this._HttpClient.post(`${Environment.baseURL}/api/v1/auth/resetPassword`)
// }


// sendCodeAPI(data:any):Observable<any>
// {
//   return this._HttpClient.post(`${Environment.baseURL}/api/v1/auth/verifyResetCode`)
// }


// sendNewPasswordAPI(data:any):Observable<any>
// {
//   return this._HttpClient.post(`${Environment.baseURL}/api/v1/auth/resetPassword`)
// }
















}
