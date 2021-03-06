package com.ecomm.mango.models;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@AllArgsConstructor
@Builder
public class AuthenticationResponse {
	private final String jwt;
	private UserInfo userInfo;
}
