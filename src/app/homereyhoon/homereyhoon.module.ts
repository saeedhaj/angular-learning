import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomereyhoonRoutingModule } from './homereyhoon-routing.module';
import { HomereyhoonComponent } from './homereyhoon.component';


@NgModule({
  declarations: [HomereyhoonComponent],
  imports: [
    CommonModule,
    HomereyhoonRoutingModule
  ]
})
export class HomereyhoonModule { }
