import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ShoppingCartComponent } from './component/shopping-cart/shopping-cart/shopping-cart.component';
import { LoginComponent } from './component/login/login/login.component';
import { DetailComponent } from './component/detail/detail/detail.component';
import { HomeComponent } from './component/home/home/home.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ChangePasswordComponent } from './component/change-password/change-password.component';
import {AuthInterceptor} from './component/login/auth.interceptor';
import {ListSearchComponent} from './component/list-search/list-search/list-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ShoppingCartComponent,
    LoginComponent,
    DetailComponent,
    HomeComponent,
    ChangePasswordComponent,
    ListSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
