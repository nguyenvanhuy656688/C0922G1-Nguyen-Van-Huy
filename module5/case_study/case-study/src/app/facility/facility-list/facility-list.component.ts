import { Component, OnInit } from '@angular/core';
import {Facility} from "../../model/facility";
import {FacilityType} from "../../model/facility-type";
import {FacilityService} from "../../service/facility.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {
  facilityType: FacilityType[]=[];
  facilityList: Facility[] = [];
  temp: Facility={};

  constructor(private facilityService:FacilityService,private router:Router) {



  }

  ngOnInit(): void {
  }

  searchForFacilityTypeAndName(value: string, value2: string) {

  }

  deleteFacility() {

  }
}
