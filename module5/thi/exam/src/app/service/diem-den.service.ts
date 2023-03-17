import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {DiemDen} from '../model/diem-den';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DiemDenService {

  constructor(private httpClient:HttpClient) { }

  danhSach():Observable<DiemDen[]> {
    return this.httpClient.get<DiemDen[]>('http://localhost:8080/diemDen');
  }
}
