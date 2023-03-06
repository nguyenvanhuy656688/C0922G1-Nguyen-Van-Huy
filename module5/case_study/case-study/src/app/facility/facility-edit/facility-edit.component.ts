import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {RentType} from "../../model/rent-type";
import {FacilityType} from "../../model/facility-type";

@Component({
  selector: 'app-facility-edit',
  templateUrl: './facility-edit.component.html',
  styleUrls: ['./facility-edit.component.css']
})
export class FacilityEditComponent implements OnInit {
  reactiveForm = FormGroup;
  rentType: RentType[];
  facilityType: FacilityType[];

  constructor() { }

  ngOnInit(): void {
  }

  edit() {

  }
}
