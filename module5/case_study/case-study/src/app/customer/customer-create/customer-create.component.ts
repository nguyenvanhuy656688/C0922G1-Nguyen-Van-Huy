import {Component, OnInit} from '@angular/core';
import {CustomerType} from "../../model/customer-type";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Customer} from "../../model/customer";
import {CustomerService} from "../../service/customer.service";
import {CustomerTypeService} from "../../service/customer-type.service";

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  customerType: CustomerType[] = [];
  reactiveForm: FormGroup;

  constructor(private router:Router , private customerService:CustomerService , private customerTypeService:CustomerTypeService) {
    this.customerTypeService.getAll().subscribe(data => {
      this.customerType =  data
    })
    this.reactiveForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', [Validators.required]),
      dateOfBirth: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      idCard: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      customerType: new FormControl('')
    })
  }


  ngOnInit(): void {
  }

  create() {
    let customer:Customer
    customer = this.reactiveForm.value
    if (this.reactiveForm.valid) {
      let temp = this.customerService.create(customer).subscribe(ok => {
        if (temp != null) {
          alert('thêm mới thành công');
        }
        this.router.navigateByUrl('/customer');
      });
    } else {
      alert('Vui lòng kiểm tra lại thông tin');
    }
  }
}
