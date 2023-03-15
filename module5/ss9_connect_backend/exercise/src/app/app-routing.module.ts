import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductEditComponent} from "./product/product-edit/product-edit.component";
import {ProductListComponent} from "./product/product-list/product-list.component";



const routes: Routes = [
  {path:'product/edit/:id',component:ProductEditComponent},
  {path:'product/list',component:ProductListComponent},
  {path:'todo/list',component:ProductListComponent},

  {
    path: 'product',
    loadChildren: () => import('./product-list/product-list.module').then(module => module.ProductModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
