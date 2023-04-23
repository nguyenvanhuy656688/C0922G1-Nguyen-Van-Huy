import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './component/home/home/home.component';
import {ShoppingCartComponent} from './component/shopping-cart/shopping-cart/shopping-cart.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./component/home/home.module').then(module => module.HomeModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./component/login/login.module').then(module => module.LoginModule)
  },
  {
    path: 'shopping',
    loadChildren: () => import('./component/shopping-cart/shopping-cart.module').then(module => module.ShoppingCartModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
