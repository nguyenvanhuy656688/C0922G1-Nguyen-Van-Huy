import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Customer} from "../model/customer";
import {HttpClient} from "@angular/common/http";
import {Facility} from "../model/facility";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient:HttpClient) { }

  getAll():Observable<Customer[]> {
    return this.httpClient.get<Customer[]>('http://localhost:3000/customers')
  }

  searchName(nameSearch: string) {
    return this.httpClient.get<Facility[]>('http://localhost:3000/customers?name_like=' + nameSearch);
  }

  customerTypeAndNameSearch(nameSearch: string, customerTypeSearch: string) {
    return this.httpClient.get<Facility[]>('http://localhost:3000/customers?name_like=' + nameSearch +'&customerType.name=' + customerTypeSearch);
  }
  create(customer: Customer) {
    return this.httpClient.post<Customer>('http://localhost:3000/customers', customer);
  }
}
