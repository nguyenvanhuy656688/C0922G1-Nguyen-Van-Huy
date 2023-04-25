import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AquaProduct} from '../model/aqua-product';

@Injectable({
  providedIn: 'root'
})
export class AquaProductService {

  constructor(private httpClient:HttpClient) { }


  getProductFish(page: number, size: number):Observable<AquaProduct[]> {
    return this.httpClient.get<AquaProduct[]>('http://localhost:8080/api/public/listFish?page=' + page + '&size=' + size)
  }

  getProductAquatic(page1: number, size1: number):Observable<AquaProduct[]> {
    return this.httpClient.get<AquaProduct[]>('http://localhost:8080/api/public/listAquatic?page1=' + page1 + '&size1=' + size1)
  }

  getProductFood(page2: number, size2: number):Observable<AquaProduct[]> {
    return this.httpClient.get<AquaProduct[]>('http://localhost:8080/api/public/listFood?page2=' + page2 + '&size2=' + size2)
  }
}
