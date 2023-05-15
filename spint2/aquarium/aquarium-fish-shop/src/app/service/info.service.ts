import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {OrderProduct} from '../model/order-product';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor(private httpClient:HttpClient) {

  }

  getInfo(id:number) {
    return this.httpClient.get<any>("http://localhost:8080/api/public/info/" + id)
  }



  getAllOrderProductDto(accountId: number, page: number): Observable<OrderProduct[]> {
    return this.httpClient.get<OrderProduct[]>(`http://localhost:8080/api/public/listOrder` + `?id=` + accountId + `&page=` + page);
  }

  findBillById(id: number) {
    return this.httpClient.get<any>("http://localhost:8080/api/public/infoBill/" + id)
  }
}
