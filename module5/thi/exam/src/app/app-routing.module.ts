import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from './component/list/list.component';
import {EditComponent} from './component/edit/edit.component';
import {CreateComponent} from './component/create/create.component';


const routes: Routes = [
  {path:'',component:ListComponent},
  {path:'xe/sua/:id',component:EditComponent},
  {path:'xe/them',component:CreateComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
