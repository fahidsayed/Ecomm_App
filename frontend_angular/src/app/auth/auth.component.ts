import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import {AuthService} from '../services/auth.service';
import { Router } from '@angular/router';
import { UserInfo } from '../models/userinfo';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  user:User;
  userInfo:UserInfo=new UserInfo();
  isAuthenticated:boolean=false;
  constructor(private authService:AuthService,private router:Router/*,private store:Store<{getUserInfo:UserInfo}>*/) { 
    this.user=new User();
    // this.testUser={firstName:'test',lastName:'lasttest',email:'e',phone:'123'};
  }

  ngOnInit(): void {
    this.authService.isAuthenticated.subscribe(response=>{
      this.isAuthenticated=response.valueOf();
      if(this.isAuthenticated){
        this.router.navigate(['home']);
      }
    });
  }

  login(){
    console.log(this.user.email);
    console.log(this.user.password);
    this.authService.authenticate(this.user).subscribe((response)=>{
      if(response!=null && response.jwt!=null){
        localStorage.setItem('ecomm_jwt',response.jwt)
        console.log(response.jwt);
        console.log(response.userInfo);
        this.userInfo=response.userInfo;
        this.authService.isAuthenticated.next(true);
        this.authService.userSubject.next(this.userInfo);
        this.router.navigate(['home']);
      }
    });
  }
}
