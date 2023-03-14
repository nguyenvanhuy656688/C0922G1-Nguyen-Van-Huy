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
      name: new FormControl('', [Validators.required,Validators.pattern('^[A-Z][a-z]*( [A-Z][a-z]*)*$')]),
      dateOfBirth: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      idCard: new FormControl('', [Validators.required,Validators.pattern('^[0-9]{9}$|^[0-9]{12}$')]),
      phoneNumber: new FormControl('', [Validators.required,Validators.pattern('^09\d{8}$')]),
      address: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required,Validators.email]),
      customerType: new FormControl(null , [Validators.required])
    })
  }


  ngOnInit(): void {
  }

  create() {
    let customer:Customer
    customer = this.reactiveForm.value
    if (this.reactiveForm.valid) {
      let temp = this.customerService.create(customer).subscribe(ok => {
        if (ok && temp != null) {
          alert('thêm mới thành công');
        }
        this.router.navigateByUrl('/customer');
      });
    } else {
      alert('Vui lòng kiểm tra lại thông tin');
    }
  }
}
