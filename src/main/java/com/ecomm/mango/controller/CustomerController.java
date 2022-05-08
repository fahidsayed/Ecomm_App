package com.ecomm.mango.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ecomm.mango.dto.CustomerDTO;
import com.ecomm.mango.service.CustomerService;

@RestController
public class CustomerController {
    
	@Autowired
	private CustomerService customerService;
	
    @PostMapping("/addCustomer")
    public String addCustomer(@RequestBody CustomerDTO customerdto) {
    	return customerService.addCustomer(customerdto);
    }
}
