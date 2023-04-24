import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {InfoLocationService} from '../../service/info-location.service';
import {InfoLocation} from '../../model/info-location';
import * as moment from 'moment';
import Swal from 'sweetalert2'
import {PositionAndEmployee} from '../../model/position-and-employee';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  locationList: InfoLocation[] = [];
  remove: InfoLocation;
  managerList: PositionAndEmployee[] = [];
  employeeList: PositionAndEmployee[] = [];


  constructor(private route: Router, private infoLocationService:InfoLocationService) {

  }

  ngOnInit(): void {
    this.infoLocationService.getAll().subscribe(data=>{
      this.locationList = data
    })
    this.infoLocationService.getAllListEmployee().subscribe(data=>{
      this.managerList = data
    })
  }

  delete() {
    let  info = this.remove.id
    if (info != null){
      this.infoLocationService.deleteById(info).subscribe(data => {
        Swal.fire({
          title: 'Xóa thành công!',
          icon: 'success',
          confirmButtonText: 'Xác nhận',
          confirmButtonColor: 'darkorange'
        })
        this.ngOnInit()
      })
    }else{
      Swal.fire('Xóa thất bại,vui lòng kiểm tra lại', '', 'error')
    }
  }

  searchForManagerAndName(nameSearch: string, managerSearch: string) {
    let value = parseInt(managerSearch)
    if (!managerSearch) {
      this.infoLocationService.searchName(nameSearch).subscribe(data => {
        this.locationList = data;
      });
    } else {
      this.infoLocationService.managerAndNameSearch(nameSearch, value).subscribe(data => {
        this.locationList = data;
      });
    }


  }
}
