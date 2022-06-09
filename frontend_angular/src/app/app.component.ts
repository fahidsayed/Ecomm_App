import { Component, OnInit } from '@angular/core';
import { AutoLoginRequest } from './models/autologin-request';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'frontend_angular';

  constructor(private authService:AuthService){}
  ngOnInit(): void {
    this.authService.autoLogin(new AutoLoginRequest()).subscribe(response=>{
      if(response.validToken){
        this.authService.isAuthenticated.next(true);
        this.authService.userSubject.next(response.userInfo);
      }
    });
  }
}
