import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private httpClient:HttpClient) { }

  addCart(userId,footId,quantity,size): Observable<any> {
    let dto = {
      accounts:userId,
      aquaProduct:footId,
      quantity:quantity,
      size:size
    }
    return this.httpClient.post("http://localhost:8080/api/public/cart/create", dto);
  }

  increaseQuantity(userId,aquaProductId,size): Observable<any> {
    debugger
    let dto = {
      accounts:userId,
      aquaProduct:aquaProductId,
      size:size
    }
    return this.httpClient.post("http://localhost:8080/api/public/cart/increase", dto);
  }

  reduceQuantity(userId,aquaProductId,size): Observable<any> {
    let dto = {
      accounts:userId,
      aquaProduct:aquaProductId,
      size:size
    }
    return this.httpClient.post("http://localhost:8080/api/public/cart/reduce", dto);
  }

  editCart(size: string, id: number, productId:number, userId:number): Observable<any> {
    let dto = {
      id:id,
      size:size,
      accounts:userId,
      aquaProduct:productId,
    }
    return this.httpClient.post("http://localhost:8080/api/public/cart/edit", dto);
  }

  showAllCart(id:number): Observable<any> {
    return this.httpClient.get<any>("http://localhost:8080/api/public/cart/list/"+id)
  }

  delete(id: number) {
    return this.httpClient.delete<any>("http://localhost:8080/api/public/cart/delete/" + id)
  }

}
