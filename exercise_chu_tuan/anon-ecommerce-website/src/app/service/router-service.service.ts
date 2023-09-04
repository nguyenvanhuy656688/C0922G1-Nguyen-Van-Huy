import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class RouterServiceService {

  constructor(private router:Router) {

  }

  navigateToHome() {
    this.router.navigate(['']);
  }

  navigateToLogin() {
    this.router.navigate(['login']);
  }
}
