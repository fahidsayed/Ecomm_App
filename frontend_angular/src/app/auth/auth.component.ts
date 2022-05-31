import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  user:User
  constructor(private authService:AuthService) { 
    this.user=new User();
  }

  ngOnInit(): void {
    
  }

  login(){
    console.log(this.user.userName);
    console.log(this.user.password);
    this.authService.authenticate(this.user).subscribe((response)=>{
      if(response!=null && response.jwt!=null){
        localStorage.setItem('ecomm_jwt',response.jwt)
        console.log(response.jwt);
      }
    });
  }
}
