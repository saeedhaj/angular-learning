import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {

  paynumber: number;
  text: string;
  cardnumber: number;
  exiryData: Date;
  securityCode: number;
  postalCode: number;
  postal: string;
  constructor() { }

  ngOnInit(): void {
  }

  kharid() {
    console.log(`payment${this.paynumber} text is${this.text}cardname ${this.cardnumber} exirydata ${this.exiryData}sectori ${this.securityCode}postcart ${this.postalCode} p ${this.postal}`);
    // alert(this.paynumber)
  }



}
