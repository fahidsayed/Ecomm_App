import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'

import {AuthService} from './services/auth.service';
import {CustomersService} from './services/customers.service';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { AuthInterceptorInterceptor } from './auth-interceptor.interceptor';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AuthGuard } from './services/auth.guard';
// import { StoreModule } from '@ngrx/store';
// import { reducers } from './reducers';
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    NavComponent,
    CustomersListComponent,
    SignupComponent,
    HomeComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    // StoreModule.forRoot(reducers)
  ],
  providers: [AuthService,CustomersService,AuthGuard,
  {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptorInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
