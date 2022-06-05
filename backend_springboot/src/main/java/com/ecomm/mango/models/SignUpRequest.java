package com.ecomm.mango.models;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SignUpRequest {

	private String firstName;
	private String lastName;
	private String email;
	private String phone;
	private String password;
	private LocalDate dateOfBirth;
}
