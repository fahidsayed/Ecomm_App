package com.ecomm.mango.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ecomm.mango.dto.CustomerDTO;
import com.ecomm.mango.service.CustomerService;

@RestController
//@CrossOrigin(origins = "http://localhost:4200")
public class CustomerController {
    
	@Autowired
	private CustomerService customerService;
	
    @PostMapping("/addCustomer")
    public ResponseEntity<CustomerDTO> addCustomer(@RequestBody CustomerDTO customerdto) {
    	return new ResponseEntity<CustomerDTO>(customerService.addCustomer(customerdto),HttpStatus.OK);
    }
    
    @GetMapping("/getAllCustomers")
    public ResponseEntity<List<CustomerDTO>> getAllCustomers() {
    	List<CustomerDTO> customers = customerService.getAllCustomers();
    	return new ResponseEntity<List<CustomerDTO>>(customers,HttpStatus.OK);
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
