package com.ecomm.mango.service;

import com.ecomm.mango.dto.CustomerDTO;
import java.util.List;

public interface CustomerService {
	
    public String addCustomer(CustomerDTO customerModel);
    
    public List<CustomerDTO> getAllCustomers();
    
    public CustomerDTO getCustomer(Integer customerId);
    
    public CustomerDTO editCustomerDetails(CustomerDTO customerdto);
}
