import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
const AUTH_API = 'http://localhost:8080/api/public/';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  username = '';
  isLoggedIn: boolean;
  httpOptions: any;

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    };
  }

  login(obj:any): Observable<any> {
    return this.http.post('http://localhost:8080/api/public/login', {username: obj.username, password: obj.password},this.httpOptions);
  }

  changePassword(obj:any): Observable<any> {
    debugger
    return this.http.post( 'http://localhost:8080/api/public/change-password', {
      username: obj.username,
      password: obj.password,
      newPassword: obj.newPassword,
      confirmNewPassword: obj.confirmNewPassword
    }, this.httpOptions);
  }

}
