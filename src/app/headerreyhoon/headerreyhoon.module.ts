import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderreyhoonComponent } from './headerreyhoon.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HeaderreyhoonComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[HeaderreyhoonComponent]
})
export class HeaderreyhoonModule { }
