import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderModule } from './header/header.module';

import { CarsModule } from './cars/cars.module';
import { MobailsModule } from './mobails/mobails.module';
import{LogreyhoonModule} from './logreyhoon/logreyhoon.module';
import { HeaderreyhoonModule } from './headerreyhoon/headerreyhoon.module';
import { FooterreyhoonModule } from './footerreyhoon/footerreyhoon.module';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,

    HeaderreyhoonModule,
    FooterreyhoonModule ,
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
