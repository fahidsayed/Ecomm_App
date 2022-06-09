import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import {SignupComponent} from './signup/signup.component'
import {CustomersListComponent} from './customers-list/customers-list.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {path:'login',component:AuthComponent},
  {path:'signup',component:SignupComponent},
  {path:'customerslist',component:CustomersListComponent},
  {path:'home',component:HomeComponent,canActivate:[AuthGuard]},
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
