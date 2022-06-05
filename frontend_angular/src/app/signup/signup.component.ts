import { Component, OnInit } from '@angular/core';
import { SignUpUser } from '../models/signUpUser';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  monthsOfYear: string[] = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
  // monthsOfYearObj={"January":1,"February":2,"March":3,"April":4,"May":5,"June":6,
  //                           "July":7,"August":8,"September":9,"October":10,"November":11,"December":12};
  daysOfMonth: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  years: number[] = [1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989];


  // private signUpUser:SignUpUser
  signUpUser: SignUpUser;
  signUpStatusMessage: string = "";
  signUpSuccessFlag: boolean=false;
  signUpFailureFlag:boolean=false;
  signUpFailureMessage:string="Sign Up Failed. Please try again!";
  constructor(private authService: AuthService) {
    this.signUpUser = new SignUpUser();
  }

  ngOnInit(): void {
    this.signUpUser.dobDay = this.daysOfMonth[0];
    this.signUpUser.dobMonth = this.monthsOfYear[0];
    this.signUpUser.dobYear = this.years[0];
  }
  signUp() {
    this.setDateOfBirth();
    console.log(this.signUpUser);
    // this.authService.signUpUser(this.signUpUser).subscribe(response=>{
    //   this.signUpStatusMessage=response.message;
    //   this.signUpSuccessFlag=response.signUpSuccessFlag;
    // },
    // error=>{
    //   console.log('Error during sign up',error)
    // }
    // );

    this.authService.signUpUser(this.signUpUser).subscribe(
      {
        next: response => {
          this.signUpStatusMessage = response.message;
          this.signUpSuccessFlag = response.signUpSuccessFlag;
        },
        error: (e) => {
          this.signUpFailureFlag=true;
          if(e.error.includes('Account with Email')){
            this.signUpFailureMessage=e.error;
          }
          console.log('Error during sign up: '+e)
        },
        complete:()=>{
          console.log('sign up completed!')
        }
      }
    );
  }
  setDateOfBirth() {
    this.signUpUser.dateOfBirth = new Date(this.signUpUser.dobYear + "-" + this.signUpUser.dobMonth + "=" + this.signUpUser.dobDay);
  }
}
