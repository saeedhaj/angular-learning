import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomereyhoonComponent } from './homereyhoon.component';


const routes: Routes = [
  {
    path:'',
    component: HomereyhoonComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomereyhoonRoutingModule { }
