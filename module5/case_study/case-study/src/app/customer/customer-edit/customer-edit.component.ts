import { Component, OnInit } from '@angular/core';
import {CustomerType} from "../../model/customer-type";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customerType: CustomerType[] = [];
  reactiveForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  edit() {

  }
}
