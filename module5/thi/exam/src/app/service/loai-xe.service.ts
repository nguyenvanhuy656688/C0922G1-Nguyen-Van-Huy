import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {LoaiXe} from '../model/loai-xe';
import {Xe} from '../model/xe';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoaiXeService {

  constructor(private httpClient:HttpClient) { }

  danhSach():Observable<LoaiXe[]> {
    return this.httpClient.get<LoaiXe[]>('http://localhost:8080/loaiXe');
  }
}
