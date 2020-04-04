import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "Salam Man yek Component hastam";
  sizeMan: number = 40;

  constructor() {
    // this.saySalam()

  }

  saySalam() {
    alert("Salllllaaaaam")
  }

}
