import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subject, Subscription } from 'rxjs';
import { User } from '../models/user';
import { UserInfo } from '../models/userinfo';
import { AuthService } from '../services/auth.service';
import { getUserInfo } from '../store/userinfo.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  firstName:string;
  lastName:string;
  isAuthenticated:boolean=false;
  subjectSub:Subscription=new Subscription();
  

  // userInfo$:Observable<UserInfo>;
  constructor(/*private store:Store<{getUserInfo:UserInfo}>,*/private authService:AuthService,
  private router:Router
  ) { 
    // this.userInfo$=this.store.select('getUserInfo');
    this.firstName='';
    this.lastName='';
  }

  ngOnInit(){
    this.authService.isAuthenticated.subscribe(response=>{
      this.isAuthenticated=response.valueOf();
    });
    // console.log('About To Subscribe');
    // this.authService.userSubject.subscribe(userInfo=>{
    //   this.firstName=userInfo.firstName;
    //   this.lastName=userInfo.lastName;
    // });    

}

ngAfterViewInit(){
  this.authService.userSubjectObs.subscribe(userInfo=>{
    this.firstName=userInfo.firstName;
    this.lastName=userInfo.lastName;
    console.log(this.firstName);
    console.log(this.lastName);
  });
}

}