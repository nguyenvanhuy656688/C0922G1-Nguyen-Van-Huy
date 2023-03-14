import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RentType} from "../../model/rent-type";
import {FacilityType} from "../../model/facility-type";
import {Facility} from "../../model/facility";
import {ActivatedRoute, Router} from "@angular/router";
import {FacilityService} from "../../service/facility.service";
import {FacilityTypeService} from "../../service/facility-type.service";
import {RentTypeService} from "../../service/rent-type.service";

@Component({
  selector: 'app-facility-edit',
  templateUrl: './facility-edit.component.html',
  styleUrls: ['./facility-edit.component.css']
})
export class FacilityEditComponent implements OnInit {
  rentType: RentType[] = [];
  facilityType: FacilityType[] = [];
  facility: Facility = {}
  idCheck: number = 0;
  mess: string;


  reactiveForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(this.facility?.name, [Validators.required,Validators.pattern('^[A-Z][a-z]*( [A-Z][a-z]*)*$')]),
    area: new FormControl(this.facility?.area, [Validators.required]),
    image: new FormControl(this.facility?.image, [Validators.required]),
    cost: new FormControl(this.facility?.cost, [Validators.required]),
    maxPeople: new FormControl(this.facility?.standardRoom, [Validators.required]),
    standardRoom: new FormControl(this.facility?.standardRoom, [Validators.required, Validators.min(0), Validators.max(1)]),
    descriptionOfOtherConvenience: new FormControl(this.facility?.descriptionOfOtherConvenience,[Validators.required]),
    poolArea: new FormControl(this.facility?.poolArea,[Validators.required]),
    numberOfFloors: new FormControl(this.facility?.numberOfFloors,[Validators.required]),
    attachFacility: new FormControl(this.facility?.attachFacility,Validators.required),
    rentType: new FormControl(this.facility?.rentType, [Validators.required]),
    facilityType: new FormControl(this.facility?.facilityType, [Validators.required]),
  });


  constructor(private activatedRoute: ActivatedRoute, private router: Router, private facilityService: FacilityService
    , private facilityTypeService: FacilityTypeService, private rentTypeService: RentTypeService) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(data => {
      const id = data.get('id');
      if (id != null) {
        this.getFacility(+id)
      }
    })
    this.facilityTypeService.getAll().subscribe(data => {
      this.facilityType = data
    })
    this.rentTypeService.getAll().subscribe(data => {
      this.rentType = data
    })
  }

  edit() {
    this.facility = this.reactiveForm.value
    if (this.reactiveForm.valid) {
      const temp = this.facilityService.edit(this.facility.id, this.facility).subscribe(ok => {
        if (temp != null && ok) {
          alert('Đã chỉnh sửa thành công')
        }
        this.router.navigateByUrl('/facility')
      })
    } else alert('Vui lòng thử lại')
  }

  private getFacility(id: number) {
    this.facilityService.findById(id).subscribe(data => {
      this.reactiveForm.patchValue(data)
    })

  }

  checkFacilityType() {
    this.idCheck = this.reactiveForm.controls.facilityType.value
  }

  checkPool(value: string) {

  }

  checkFloor(value: string) {

  }
}
