import { Injectable } from '@angular/core';
import {HttpBackend, HttpClient} from '@angular/common/http'

import { User } from '../models/user';
import {AuthResponse} from '../models/auth-response';
import { SERVICE_URI } from 'src/environments/service.uri';
import { SignUpUser } from '../models/signUpUser';
import { SignUpResponse } from '../models/signup-response';

@Injectable()
export class AuthService {

  constructor(private httpBackEnd:HttpBackend) { }

  public authenticate(user:User){
    const newHttpClient = new HttpClient(this.httpBackEnd);
    return newHttpClient.post<AuthResponse>(SERVICE_URI.baseURL+SERVICE_URI.authenticate,user);
  }

  public signUpUser(signUpUser:SignUpUser){
    const newHttpClient = new HttpClient(this.httpBackEnd);
    return newHttpClient.post<SignUpResponse>(SERVICE_URI.baseURL+SERVICE_URI.signUpUser,signUpUser);
  }
}
