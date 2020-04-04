import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css']
})
export class MembershipComponent implements OnInit {
  fullName: string;
  email: string;
  phoneNumber: string;
  constructor() { }

  ngOnInit(): void {
  }

  register(){
    console.log(`Your FullName is: ${this.fullName} And this is you Email: ${this.email} alsdjflkdsj ${this.phoneNumber}`);
  }

}
