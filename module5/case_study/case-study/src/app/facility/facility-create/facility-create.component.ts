import { Component, OnInit } from '@angular/core';
import {RentType} from "../../model/rent-type";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-facility-create',
  templateUrl: './facility-create.component.html',
  styleUrls: ['./facility-create.component.css']
})
export class FacilityCreateComponent implements OnInit {
  rentType: RentType[];
  facilityType: any;
  reactiveForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  create() {

  }
}
