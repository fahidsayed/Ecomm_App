//package com.ecomm.mango.service;
//
//import java.util.List;
//import java.util.Optional;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import com.ecomm.mango.dto.CustomerDTO;
//import com.ecomm.mango.service.CustomerService;
//import com.ecomm.grapes.entity.Customer;
//import com.ecomm.grapes.repository.CustomerRepo;
//
//
//@Service
//public class CustomerServiceImpl implements CustomerService {
//
//	@Autowired
//	private CustomerRepo customerRepo;
//
//	public CustomerDTO addCustomer(CustomerDTO customerdto) {
//		Customer customer = Customer.builder().firstName(customerdto.getFirstName()).lastName(customerdto.getLastName())
//				.email(customerdto.getEmail()).phone(customerdto.getPhone()).build();
//
//		Customer addedCustomer = customerRepo.save(customer);
//		if (addedCustomer != null) {
//			Integer customerId = addedCustomer.getCustomerId();
//			if (customerId != null) {
//				CustomerDTO addedCustomerDTO=CustomerDTO.builder().customerId(customerId).firstName(addedCustomer.getFirstName()).lastName(addedCustomer.getLastName())
//				.phone(addedCustomer.getPhone()).email(addedCustomer.getEmail()).build();
//				return addedCustomerDTO;
//			}
//		}
//		return null;
//	}
//
//	public List<CustomerDTO> getAllCustomers() {
//		return customerRepo.findAll().stream().map(CustomerDTO::new).toList();
//	}
//
//	public CustomerDTO getCustomer(Integer customerId) {
//		Optional<Customer> optional = customerRepo.findById(customerId);		
//		return optional.map(CustomerDTO::new).get();
//	}
//	
//	public CustomerDTO editCustomerDetails(CustomerDTO customerdto) {
//		
//		Optional<Customer> optional = customerRepo.findById(customerdto.getCustomerId());		
//		
//		if (optional.isPresent()) {
//			Customer customer = optional.get();
//			
//			String firstName = customerdto.getFirstName();
//			if(firstName!=null) { customer.setFirstName(firstName);}
//			String lastName = customerdto.getLastName();
//			if(lastName!=null) {customer.setLastName(lastName);}
//			String email = customerdto.getEmail();
//			if(email!=null) {customer.setEmail(email);}
//			String phone = customerdto.getPhone();
//			if(phone!=null) {customer.setPhone(phone);}		
//			
//			Customer updatedCustomer = customerRepo.save(customer);
//			return new CustomerDTO(updatedCustomer);
//		}else {
//			return new CustomerDTO();
//		}
//	}
//}
