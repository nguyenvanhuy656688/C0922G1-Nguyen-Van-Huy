import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {FacilityType} from "../model/facility-type";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FacilityTypeService {

  constructor(private httpClient:HttpClient) { }

  getAll():Observable<FacilityType[]> {
    return this.httpClient.get<FacilityType[]>("http://localhost:3000/facilityType")
  }
}
