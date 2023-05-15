import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderProductService {

  constructor(private httpClient:HttpClient) { }

  addBill(userId:number,total:number,time:string): Observable<any> {
    debugger
    let dto = {
      accounts:userId,
      dateOrder:time,
      total:total
    }
    return this.httpClient.post("http://localhost:8080/api/public/cart/buy", dto);
  }
}
