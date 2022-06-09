import { Injectable } from '@angular/core';
import {HttpBackend, HttpClient} from '@angular/common/http'

import { User } from '../models/user';
import {AuthResponse} from '../models/auth-response';
import { SERVICE_URI } from 'src/environments/service.uri';
import { SignUpUser } from '../models/signUpUser';
import { SignUpResponse } from '../models/signup-response';
import { AsyncSubject, BehaviorSubject, Observable, Subject } from 'rxjs';
import { UserInfo } from '../models/userinfo';
import { AutoLoginRequest } from '../models/autologin-request';
import { AutoLoginResponse } from '../models/autologin-response';

@Injectable()
export class AuthService {

  userSubject:BehaviorSubject<any>;
  userSubjectObs:Observable<UserInfo>;
  // userSubject:AsyncSubject<UserInfo>;

  isAuthenticated:BehaviorSubject<boolean>;

  constructor(private httpBackEnd:HttpBackend) {
    this.userSubject =new BehaviorSubject<any>(null);
    this.userSubjectObs=this.userSubject.asObservable();
    this.isAuthenticated=new BehaviorSubject<boolean>(false);
    // this.userSubject =new AsyncSubject<UserInfo>();
   }

  public authenticate(user:User){
    const newHttpClient = new HttpClient(this.httpBackEnd);
    return newHttpClient.post<AuthResponse>(SERVICE_URI.baseURL+SERVICE_URI.authenticate,user);
  }

  public signUpUser(signUpUser:SignUpUser){
    const newHttpClient = new HttpClient(this.httpBackEnd);
    return newHttpClient.post<SignUpResponse>(SERVICE_URI.baseURL+SERVICE_URI.signUpUser,signUpUser);
  }

  public autoLogin(autoLoginRequest:AutoLoginRequest){
    const newHttpClient = new HttpClient(this.httpBackEnd);
    return newHttpClient.post<AutoLoginResponse>(SERVICE_URI.baseURL+SERVICE_URI.autoLogin,autoLoginRequest);
  }
}
