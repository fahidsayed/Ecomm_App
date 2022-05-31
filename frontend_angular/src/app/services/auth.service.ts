import { Injectable } from '@angular/core';
import {HttpBackend, HttpClient} from '@angular/common/http'

import { User } from '../models/user';
import {AuthResponse} from '../models/auth-response';
import { SERVICE_URI } from 'src/environments/service.uri';

@Injectable()
export class AuthService {

  constructor(private httpBackEnd:HttpBackend) { }

  public authenticate(user:User){
    const newHttpClient = new HttpClient(this.httpBackEnd);
    return newHttpClient.post<AuthResponse>(SERVICE_URI.baseURL+SERVICE_URI.authenticate,user);
  }
}
