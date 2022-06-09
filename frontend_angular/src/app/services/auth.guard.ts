import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  isAuthenticated:boolean=false;
  constructor(private authService:AuthService,private router:Router){
    this.authService.isAuthenticated.subscribe(response=>{
      this.isAuthenticated=response.valueOf();
    });
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | Promise<boolean>  {
      
    if(!this.isAuthenticated){
      this.router.navigate(['/login']);
    }
    return this.isAuthenticated;
  }
  
}
