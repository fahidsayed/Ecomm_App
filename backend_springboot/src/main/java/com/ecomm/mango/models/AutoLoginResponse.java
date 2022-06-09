package com.ecomm.mango.models;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AutoLoginResponse {
	private Boolean validToken;
	private UserInfo userInfo;
}
