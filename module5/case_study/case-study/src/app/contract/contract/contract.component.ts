import {Component, OnInit} from '@angular/core';
import {Contract} from "../../model/contract";
import {ContractService} from "../../service/contract.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Customer} from "../../model/customer";
import {Facility} from "../../model/facility";
import {Router} from "@angular/router";
import {CustomerService} from "../../service/customer.service";
import {FacilityService} from "../../service/facility.service";

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {
  contractList: Contract[] = [];
  customerList: Customer[] = [];
  facilityList: Facility[] = [];
  reactiveForm: FormGroup;
  contract: Contract


  constructor(private contractService: ContractService, private router: Router,
              private customerService: CustomerService, private facilityService: FacilityService) {
    this.reactiveForm = new FormGroup({
      id: new FormControl(),
      startDay: new FormControl(),
      endDay: new FormControl(),
      cost: new FormControl(),
      total: new FormControl(),
      customer: new FormControl(),
      facility: new FormControl()
    })

  }

  ngOnInit(): void {
    this.contractService.getAll().subscribe(data => {
      this.contractList = data
      console.log(this.contractList)
    })
    this.customerService.getAll().subscribe(data => {
      this.customerList = data
    })
    this.facilityService.getAll().subscribe(data => {
      this.facilityList = data
    })
  }

  create() {
    this.contract = this.reactiveForm.value
    if (this.reactiveForm.valid) {
      let temp = this.contractService.create(this.contract).subscribe(ok => {
        if (temp != null && ok) {
          alert('Đã thêm mới thành công')
        }
        this.ngOnInit()
      })
    } else {
      alert('Thêm mới không thành công ')
    }
  }
}
