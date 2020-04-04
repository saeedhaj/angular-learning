import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MobailsRoutingModule } from './mobails-routing.module';
import { MobailsComponent } from './mobails.component';


@NgModule({
  declarations: [MobailsComponent],
  imports: [
    CommonModule,
    MobailsRoutingModule
  ]
  
})
export class MobailsModule { }
