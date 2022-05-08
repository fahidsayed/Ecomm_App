package com.ecomm.mango.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecomm.mango.dto.CustomerDTO;
import com.ecomm.grapes.entity.Customer;
import com.ecomm.grapes.repository.CustomerRepo;

@Service
public class CustomerServiceImpl implements CustomerService{
    
	@Autowired
	private CustomerRepo customerRepo;
	
    public String addCustomer(CustomerDTO customerdto){
    	Customer customer = Customer.builder().firstName(customerdto.getFirstName()).lastName(customerdto.getLastName())
    	.email(customerdto.getEmail()).phone(customerdto.getPhone()).build();
    	
    	Customer addedCustomer = customerRepo.save(customer);
    	if(addedCustomer!=null) {
    		Integer customerId=addedCustomer.getCustomerId();
    		if(customerId!=null) {
    			return "Customer Added Successfully! Customer ID is "+customerId;
    		}
    	}
        return "Customer could not be added";
    }
}
