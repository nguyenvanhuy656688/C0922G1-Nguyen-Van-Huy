import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {InfoLocation} from '../model/info-location';
import {HttpClient} from '@angular/common/http';
import {PositionAndEmployee} from '../model/position-and-employee';

@Injectable({
  providedIn: 'root'
})
export class InfoLocationService {

  constructor(private httpClient:HttpClient) { }

  getAll():Observable<InfoLocation[]> {
    return this.httpClient.get<InfoLocation[]>('http://localhost:8080/location/list');
  }

  deleteById(id: number) {
    return this.httpClient.delete<InfoLocation[]>('http://localhost:8080/location/delete/' + id);
  }

  getAllListEmployee():Observable<PositionAndEmployee[]> {
    return this.httpClient.get<PositionAndEmployee[]>('http://localhost:8080/location/employeeList');
  }


  createInfoLocation(infoLocation: InfoLocation) {
    debugger
    return this.httpClient.post<InfoLocation[]>('http://localhost:8080/location/create',infoLocation);
  }

  searchName(nameSearch: string) {
    return this.httpClient.get<PositionAndEmployee[]>('http://localhost:8080/location/listSearchByName?name=' + nameSearch);
  }

  managerAndNameSearch(nameSearch: string, id: number) {
    return this.httpClient.get<PositionAndEmployee[]>('http://localhost:8080/location/listSearchByName?name=' + nameSearch +'&id=' + id);
  }
}
