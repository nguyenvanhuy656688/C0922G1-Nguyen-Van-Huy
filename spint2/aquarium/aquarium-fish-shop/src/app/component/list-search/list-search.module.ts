import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListSearchRoutingModule } from './list-search-routing.module';
import { ListSearchComponent } from './list-search/list-search.component';


@NgModule({
  declarations: [ListSearchComponent],
  imports: [
    CommonModule,
    ListSearchRoutingModule
  ]
})
export class ListSearchModule { }
