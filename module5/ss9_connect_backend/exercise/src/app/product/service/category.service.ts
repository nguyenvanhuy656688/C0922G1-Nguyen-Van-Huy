import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Category} from "../model/category";
import {Product} from "../model/product";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient:HttpClient) { }

  getAll():Observable<Category[]> {
    return this.httpClient.get<Category[]>('http://localhost:3000/category')
  }
}
