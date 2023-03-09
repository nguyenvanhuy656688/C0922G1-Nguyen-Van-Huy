import {Component, OnInit} from '@angular/core';
import {CustomerType} from "../../model/customer-type";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {CustomerService} from "../../service/customer.service";
import {CustomerTypeService} from "../../service/customer-type.service";
import {Customer} from "../../model/customer";

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
      name: new FormControl(this.customer?.name, [Validators.required]),
      dateOfBirth: new FormControl(this.customer?.dateOfBirth, [Validators.required]),
      gender: new FormControl(this.customer?.gender, [Validators.required]),
      idCard: new FormControl(this.customer?.idCard, [Validators.required]),
      phoneNumber: new FormControl(this.customer?.phoneNumber, [Validators.required]),
      address: new FormControl(this.customer?.address, [Validators.required]),
      email: new FormControl(this.customer?.email, [Validators.required]),
      customerType: new FormControl(this.customer?.customerType)
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
    if (this.reactiveForm.valid) {
      let temp = this.customerService.edit(this.customer.id, this.customer).subscribe(ok => {
        if (temp != null) {
          alert('Chỉnh sửa thành công');
        }
        this.router.navigateByUrl('/customer');
      });
    } else {
      alert('Vui lòng kiểm tra lại thông tin');
    }
  }
}
