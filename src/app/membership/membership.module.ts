import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembershipRoutingModule } from './membership-routing.module';
import { MembershipComponent } from './membership.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [MembershipComponent],
  imports: [
    CommonModule,
    MembershipRoutingModule,
    FormsModule
  ]
})
export class MembershipModule { }
