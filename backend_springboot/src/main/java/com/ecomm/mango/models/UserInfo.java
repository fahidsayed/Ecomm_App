package com.ecomm.mango.models;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserInfo {
	
	private String firstName;
	private String lastName;
	private String email;
	private String phone;
	//Add User preferences here later on
}
