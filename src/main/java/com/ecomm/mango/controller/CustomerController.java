package com.ecomm.mango.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
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
    
    @GetMapping("/getAllCustomers")
    public List<CustomerDTO> getAllCustomers() {
    	return customerService.getAllCustomers();
    }
    
    @GetMapping("/getCustomer")
    public CustomerDTO getCustomer(@RequestParam Integer customerId) {
    	return customerService.getCustomer(customerId);
    }
    
    @PutMapping("/editCustomer")
    public CustomerDTO editCustomer(@RequestBody CustomerDTO customerdto) {
    	return customerService.editCustomerDetails(customerdto);
    }
}
