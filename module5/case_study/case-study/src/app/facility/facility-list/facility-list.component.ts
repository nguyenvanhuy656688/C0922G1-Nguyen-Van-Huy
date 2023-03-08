import {Component, OnInit} from '@angular/core';
import {Facility} from "../../model/facility";
import {FacilityType} from "../../model/facility-type";
import {FacilityService} from "../../service/facility.service";
import {Router} from "@angular/router";
import {FacilityTypeService} from "../../service/facility-type.service";

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {
  facilityType: FacilityType[] = [];
  facilityList: Facility[] = [];
  temp: Facility = {};

  constructor(private facilityService: FacilityService, private router: Router, private facilityTypeService: FacilityTypeService) {
    this.facilityService.getAll().subscribe(data => {
      this.facilityList = data
      console.log(this.facilityList)
    })
    this.facilityTypeService.getAll().subscribe(data => {
      this.facilityType = data
      console.log(this.facilityType)
    })
  }

  ngOnInit(): void {
  }

  searchForFacilityTypeAndName(nameSearch: string, facilityTypeSearch: string): void {
    if (!facilityTypeSearch) {
      this.facilityService.searchName(nameSearch).subscribe(data => {
        alert('tìm kiếm Ok');
        this.facilityList = data;
      });
    } else {
      this.facilityService.facilityTypeSearch(nameSearch, facilityTypeSearch).subscribe(data => {
        alert('tìm kiếm Ok');
        this.facilityList = data;
      });
    }
  }

  deleteFacility(): void {
    let temp = this.facilityService.delete(this.temp.id).subscribe(data => {
      if (temp != null) {
        alert('Đã xóa thành công');
        this.facilityService.getAll()
      }else {
        alert('xóa không thành công')
      }
      this.router.navigateByUrl('/facility');
    })
  }
}
