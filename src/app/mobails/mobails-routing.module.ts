import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MobailsComponent } from './mobails.component';


const routes: Routes = [
  {
    path:'',
    component: MobailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MobailsRoutingModule { }
