import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuyRoutingModule } from './buy-routing.module';
import { BuyComponent } from './buy.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [BuyComponent],
  imports: [
    CommonModule,
    BuyRoutingModule,
    FormsModule
  ]
})
export class BuyModule { }
