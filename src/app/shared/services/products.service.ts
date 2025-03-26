import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Environment } from '../../Base/Environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private readonly _HttpClient = inject(HttpClient)

  getAllProductsAPI():Observable<any>{
    return this._HttpClient.get(`${Environment.baseURL}/api/v1/products`)
  }

  getSpecProductAPI(pId:string|null):Observable<any>{
    return this._HttpClient.get(`${Environment.baseURL}/api/v1/products/${pId}`)
  }

}
