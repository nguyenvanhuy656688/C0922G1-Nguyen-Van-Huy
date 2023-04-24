import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {InfoLocation} from '../../model/info-location';
import {PositionAndEmployee} from '../../model/position-and-employee';
import {InfoLocationService} from '../../service/info-location.service';
import {Router} from '@angular/router';
import Swal from "sweetalert2";
import * as moment from 'moment';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  formAdd: FormGroup
  infoLocation:InfoLocation
  managerList: PositionAndEmployee[] = [];

  constructor(private infoLocationService:InfoLocationService , private router:Router) {
    this.infoLocationService.getAllListEmployee().subscribe(data=>{
      this.managerList = data
    })

  }

  ngOnInit(): void {
    this.formAdd =  new FormGroup({
      name: new FormControl(this.infoLocation?.name,[Validators.required]),
      openDate: new FormControl(this.infoLocation?.openDate,[Validators.required,Validators.pattern("^(0[1-9]|[1-2][0-9]|3[0-1])/(0[1-9]|1[0-2])/((19|20)\\d\\d)$")]),
      address: new FormControl(this.infoLocation?.address,[Validators.required]),
      positionAndEmployee: new FormControl(this.infoLocation?.positionAndEmployee,[Validators.required]),
    })
  }



  add() {
    if (this.formAdd.valid) {
      let infoLocation = this.formAdd.value
      this.infoLocationService.createInfoLocation(infoLocation).subscribe(data => {
        debugger
        Swal.fire({
          title: 'Thêm mới thành công!',
          icon: 'success',
          confirmButtonText: 'Xác nhận',
          confirmButtonColor: 'darkorange'
        })
        this.formAdd.reset()
        this.router.navigateByUrl('/create');
      });
    } else {
      Swal.fire('Thêm mới thất bại', '', 'error')
    }
  }
}
