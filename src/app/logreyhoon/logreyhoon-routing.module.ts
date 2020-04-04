import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogreyhoonComponent } from './logreyhoon.component';


const routes: Routes = [
  {
    path: '',
    component: LogreyhoonComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogreyhoonRoutingModule { }
