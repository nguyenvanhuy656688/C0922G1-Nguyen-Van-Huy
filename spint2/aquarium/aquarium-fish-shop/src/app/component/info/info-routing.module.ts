import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {InfoComponent} from './info/info.component';
import {DetailComponent} from '../detail/detail/detail.component';


const routes: Routes = [
  {path: '', component: InfoComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfoRoutingModule {
}
