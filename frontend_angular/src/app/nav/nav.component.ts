import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isAuthenticated:boolean=false;
  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
    this.authService.isAuthenticated.subscribe(response=>{
      this.isAuthenticated=response.valueOf();
    });
  }

  logout(){
    localStorage.removeItem('ecomm_jwt');
    this.authService.isAuthenticated.next(false);
    this.router.navigate(['login']);
  }
}
