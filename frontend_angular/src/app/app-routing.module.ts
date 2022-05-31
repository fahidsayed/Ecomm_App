import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import {CustomersListComponent} from './customers-list/customers-list.component';

const routes: Routes = [
  {path:'auth',component:AuthComponent},
  {path:'customerslist',component:CustomersListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
