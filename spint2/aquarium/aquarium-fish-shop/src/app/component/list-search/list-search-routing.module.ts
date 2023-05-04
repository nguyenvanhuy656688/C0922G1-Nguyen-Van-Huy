import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListSearchComponent} from './list-search/list-search.component';


const routes: Routes = [
  {
    path:"",component:ListSearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListSearchRoutingModule { }
