import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Xe} from '../model/xe';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class XeService {

  constructor(private httpClient: HttpClient) {
  }

  danhSach(): Observable<Xe[]> {
    return this.httpClient.get<Xe[]>('http://localhost:8080/xe');
  }


  xoaXe(id: number) {
    return this.httpClient.delete<Xe>('http://localhost:8080/xe/' + id);
  }

  timTheoId(id: number) {
    return this.httpClient.get<Xe>('http://localhost:8080/xe/' + id);
  }

  sua(id: number, xe: Xe) {
    return this.httpClient.patch<Xe>('http://localhost:8080/xe/' + id, xe);
  }

  them(xe: Xe) {
    return this.httpClient.post<Xe>('http://localhost:8080/xe', xe );
  }
}
