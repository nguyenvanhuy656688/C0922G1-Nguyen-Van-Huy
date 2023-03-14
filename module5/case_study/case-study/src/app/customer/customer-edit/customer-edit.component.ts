import {Component, OnInit} from '@angular/core';
import {CustomerType} from "../../model/customer-type";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {CustomerService} from "../../service/customer.service";
import {CustomerTypeService} from "../../service/customer-type.service";
import {Customer} from "../../model/customer";
import {loadConfigurationFromPath} from "tslint/lib/configuration";

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customerType: CustomerType[] = [];
  reactiveForm: FormGroup;
  customer: Customer={};

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private customerService: CustomerService, private customerTypeService: CustomerTypeService) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(data => {
      const id = data.get('id');
      if (id != null) {
        this.getCustomer(+id)
      }
    })
    this.reactiveForm = new FormGroup({
      id: new FormControl(this.customer?.id),
      name: new FormControl(this.customer?.name, [Validators.required,Validators.pattern('^[A-Z][a-z]*( [A-Z][a-z]*)*$')]),
      dateOfBirth: new FormControl(this.customer?.dateOfBirth, [Validators.required]),
      gender: new FormControl(this.customer?.gender, [Validators.required]),
      idCard: new FormControl(this.customer?.idCard, [Validators.required,Validators.pattern('^[0-9]{9}$|^[0-9]{12}$')]),
      phoneNumber: new FormControl(this.customer?.phoneNumber, [Validators.required,Validators.pattern('^09\d{8}$')]),
      address: new FormControl(this.customer?.address, [Validators.required,Validators.email]),
      email: new FormControl(this.customer?.email, [Validators.required]),
      customerType: new FormControl(null,[Validators.required])
    })
    this.customerTypeService.getAll().subscribe(next => {
      this.customerType = next;
    });
  }


  private getCustomer(id: number) {
    return this.customerService.findById(id).subscribe(data => {
      this.reactiveForm.patchValue(data)
    })
  }

  edit() {
    this.customer = this.reactiveForm.value;
    console.log(this.customer)
    if (this.reactiveForm) {
       let temp = this.customerService.edit(this.customer.id, this.customer).subscribe(ok => {
        if (temp != null && ok) {
          alert('Chỉnh sửa thành công');
        }
        this.router.navigateByUrl('/customer');
      });
    } else {
      alert('Vui lòng kiểm tra lại thông tin');
    }
  }
}
