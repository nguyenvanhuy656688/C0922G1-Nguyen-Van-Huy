import { Injectable } from '@angular/core';
import {Todo} from "../../todo/model/todo";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../model/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }

  getAll():Observable<Product[]> {
    return this.httpClient.get<Product[]>('http://localhost:3000/product')
  }

  findById(id: number) {
    return this.httpClient.get<Product[]>('http://localhost:3000/product/' + id)
  }

  edit(id: number, product: Product) {
    return this.httpClient.patch<Product>('http://localhost:3000/product/' + id , product)
  }
}
