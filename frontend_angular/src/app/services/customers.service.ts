import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../models/customer';
import { SERVICE_URI } from 'src/environments/service.uri';

@Injectable()
export class CustomersService {

  constructor(private http:HttpClient) { }

  public getAllCustomers(){
    return this.http.get<Customer[]>(SERVICE_URI.baseURL+SERVICE_URI.getAllCustomers);
  }  
}
