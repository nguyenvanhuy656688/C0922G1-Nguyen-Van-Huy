import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FacilityListComponent} from "./facility/facility-list/facility-list.component";
import {FacilityCreateComponent} from "./facility/facility-create/facility-create.component";
import {FacilityEditComponent} from "./facility/facility-edit/facility-edit.component";


const routes: Routes = [
  {path: 'facility', component: FacilityListComponent},
  {path: 'facility/create', component: FacilityCreateComponent},
  {path: 'facility/edit/:id', component: FacilityEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
