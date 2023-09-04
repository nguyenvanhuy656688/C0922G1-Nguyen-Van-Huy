import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterServiceService } from './service/router-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'anon-ecommerce-website';
  constructor(private router: RouterServiceService) {}

  goToHome() {
    this.router.navigateToHome();
  }

  goToProducts() {
    this.router.navigateToLogin();
  }
}
