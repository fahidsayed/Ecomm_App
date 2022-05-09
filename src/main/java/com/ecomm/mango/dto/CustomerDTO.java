package com.ecomm.mango.dto;

import com.ecomm.grapes.entity.Customer;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@EqualsAndHashCode
public class CustomerDTO {
	private Integer customerId;
	private String firstName;
	private String lastName;
	private String email;
	private String phone;

	public CustomerDTO(Customer customer) {
		this.customerId = customer.getCustomerId();
		this.firstName = customer.getFirstName();
		this.lastName = customer.getLastName();
		this.email = customer.getEmail();
		this.phone = customer.getPhone();
	}
}
