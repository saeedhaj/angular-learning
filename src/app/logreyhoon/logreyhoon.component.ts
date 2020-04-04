import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logreyhoon',
  templateUrl: './logreyhoon.component.html',
  styleUrls: ['./logreyhoon.component.css']
})
export class LogreyhoonComponent implements OnInit {
  phoneNumber: number;
  finalMessage: string;
  firstName: string = "mohammad";
  lastName: string = "hajiaghazadeh";
  pageTitle: string = "ورود یا ثبت نام";

  constructor() { }

  ngOnInit(): void {
  }

  getCode() {
    // alert(this.phoneNumber)
    this.finalMessage = "Your Phone Number is: "+ this.phoneNumber.toString()
  }

  printFirstName(){
    console.log(this.firstName);
  }

  showMeLastName(){
    console.log(this.lastName);
  }

}
