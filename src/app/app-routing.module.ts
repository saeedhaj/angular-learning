import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'foods',
    loadChildren: () => import('./foods/foods.module').then(m => m.FoodsModule)
  },
  {
    path: 'resturants',
    loadChildren: () => import('./resturants/resturants.module').then(m => m.ResturantsModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'cars',
    loadChildren: () => import('./cars/cars.module').then(m => m.CarsModule)
  },
  {
    path: 'mobail',
    loadChildren: () => import('./mobails/mobails.module').then(m => m.MobailsModule)
  },
  {
    path: 'logreyhoon',
    loadChildren: () => import('./logreyhoon/logreyhoon.module').then(m => m.LogreyhoonModule)
  },
  {
    path: 'membership',
    loadChildren: () => import('./membership/membership.module').then(m => m.MembershipModule)
  },
  {
    path: '',
    loadChildren: () => import('./homereyhoon/homereyhoon.module').then(m => m.HomereyhoonModule)
  },
  {
    path: 'buy',
    loadChildren: () => import('./buy/buy.module').then(m => m.BuyModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
