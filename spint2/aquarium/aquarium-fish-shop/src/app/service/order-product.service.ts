import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderProductService {

  constructor(private httpClient:HttpClient) { }

  addBill(userId,total:number,time:string): Observable<any> {
    let dto = {
      userId:userId,
      time:time,
      total:total
    }
    return this.httpClient.post("http://localhost:8080/api/public/bill/buy", dto);
  }
}
