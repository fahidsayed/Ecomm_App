import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer';
import { CustomersService } from '../services/customers.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

  customers:Customer[]=[];
  constructor(private customersService:CustomersService) { }

  ngOnInit(): void {
    this.customersService.getAllCustomers().subscribe(response=>{
      console.log(response);
      this.customers=response;
    });
  }

}
