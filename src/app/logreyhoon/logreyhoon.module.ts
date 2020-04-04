import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LogreyhoonRoutingModule } from './logreyhoon-routing.module';
import { LogreyhoonComponent } from './logreyhoon.component';


@NgModule({
  declarations: [LogreyhoonComponent],
  imports: [
    CommonModule,
    LogreyhoonRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LogreyhoonModule { }
