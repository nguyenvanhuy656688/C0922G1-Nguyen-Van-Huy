import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductEditComponent} from "./product/product-edit/product-edit.component";
import {ProductListComponent} from "./product/product-list/product-list.component";


const routes: Routes = [
  {path:'product/edit/:id',component:ProductEditComponent},
  {path:'',component:ProductListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
