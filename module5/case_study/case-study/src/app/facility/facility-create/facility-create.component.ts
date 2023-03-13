import {Component, OnInit} from '@angular/core';
import {RentType} from "../../model/rent-type";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {FacilityType} from "../../model/facility-type";
import {Router} from "@angular/router";
import {RentTypeService} from "../../service/rent-type.service";
import {FacilityTypeService} from "../../service/facility-type.service";
import {Customer} from "../../model/customer";
import {Facility} from "../../model/facility";
import {FacilityService} from "../../service/facility.service";

@Component({
  selector: 'app-facility-create',
  templateUrl: './facility-create.component.html',
  styleUrls: ['./facility-create.component.css']
})
export class FacilityCreateComponent implements OnInit {
  rentType: RentType[] = [];
  facilityType: FacilityType[] = [];
  idCheck: number = 0;
  mess:String


  reactiveForm:FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl('', [Validators.required]),
    area: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
    cost: new FormControl('', [Validators.required]),
    maxPeople: new FormControl('', [Validators.required]),
    standardRoom: new FormControl('', [Validators.required,Validators.min(0),Validators.max(1)]),
    descriptionOfOtherConvenience: new FormControl(),
    poolArea: new FormControl(""),
    numberOfFloors: new FormControl(),
    attachFacility: new FormControl(),
    rentType: new FormControl(null, [Validators.required]),
    facilityType: new FormControl(null, [Validators.required]),
  });


  constructor(private router: Router, private rentTypeService: RentTypeService, private facilityTypeService: FacilityTypeService
              , private  facilityService:FacilityService) {
  }

  ngOnInit(): void {

    this.facilityTypeService.getAll().subscribe(data => {
      this.facilityType = data
    })
    this.rentTypeService.getAll().subscribe(data => {
      this.rentType = data
    })
  }

  create() {
    let facility:Facility
    facility = this.reactiveForm.value
    if (this.reactiveForm.valid) {
      let temp = this.facilityService.create(facility).subscribe(ok => {
        if (ok && temp != null) {
          alert('thêm mới thành công');
        }
        this.router.navigateByUrl('/facility');
      });
    } else {
      alert('Vui lòng kiểm tra lại thông tin');
    }

  }

  checkFacilityType() {
    const check = this.reactiveForm.controls.facilityType.value
    this.idCheck = check.id

  }


  checkPool(poolArea: string) {
    if (this.idCheck == 1 ){
      this.mess = 'Dành cho Villa'
    }
    if (poolArea == '' || poolArea == null) {
      if (this.idCheck == 1) {
        this.reactiveForm.controls.poolArea.setErrors({'nullPoolArea': true});
      }
    }

  }

  checkFloor(floor: string) {
    if (this.idCheck == 1 || this.idCheck == 2 ){
      this.mess = 'Dành cho Villa và House '
    }
    if (floor == '' || floor == null) {
      if (this.idCheck == 1 || this.idCheck == 2) {
        this.reactiveForm.controls.numberOfFloors.setErrors({'nullFloor': true});
      }
    }

  }
}
