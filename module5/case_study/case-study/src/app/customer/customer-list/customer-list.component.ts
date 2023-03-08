import { Component, OnInit } from '@angular/core';
import {Customer} from "../../model/customer";
import {CustomerType} from "../../model/customer-type";
import {Router} from "@angular/router";
import {CustomerService} from "../../service/customer.service";
import {CustomerTypeService} from "../../service/customer-type.service";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customerList: Customer[] = [];
  customerType: CustomerType[] =[];
  removeCustomer: Customer={};

  constructor(private router:Router , private customerService:CustomerService , private  customerTypeService:CustomerTypeService) {
    this.customerService.getAll().subscribe(data =>{
      this.customerList = data
      console.log(this.customerList)
    })
    this.customerTypeService.getAll().subscribe(data =>{
      this.customerType = data
      console.log(this.customerType)
    })
  }

  ngOnInit(): void {
  }

  searchForCustomerTypeAndName(nameSearch: string, customerTypeSearch: string):void {
    if (!customerTypeSearch) {
      this.customerService.searchName(nameSearch).subscribe(data => {
        alert('tìm kiếm Ok');
        this.customerList = data;
      });
    } else {
      this.customerService.customerTypeAndNameSearch(nameSearch, customerTypeSearch).subscribe(data => {
        alert('tìm kiếm Ok');
        this.customerList = data;
      });
    }
  }

  deleteCustomer() {

  }
}
