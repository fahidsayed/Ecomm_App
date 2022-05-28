package com.ecomm.mango.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ecomm.mango.models.AuthenticationRequest;
import com.ecomm.mango.models.AuthenticationResponse;
import com.ecomm.mango.service.MyUserDetailsService;
import com.ecomm.mango.util.JwtUtil;

@RestController
public class AuthenticationController {

	@Autowired
	private AuthenticationManager authenticationManager;
	
	@Autowired
	private MyUserDetailsService myUserDetailsService;
	
	@Autowired
	private JwtUtil jwtUtil;
	
	@PostMapping("/authenticate")
	public ResponseEntity<AuthenticationResponse> createAuthenticationToken(
			@RequestBody AuthenticationRequest authRequest) throws Exception {
		try {
		authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(authRequest.getUserName(), authRequest.getPassword()));
		}
		catch(AuthenticationException e) {
			throw new Exception("Bad Credentials "+e);
		}
		UserDetails userDetails = myUserDetailsService.loadUserByUsername(authRequest.getUserName());
		String token= jwtUtil.generateToken(userDetails);
		AuthenticationResponse response = AuthenticationResponse.builder().jwt(token).build();
		return new ResponseEntity<AuthenticationResponse>(response,HttpStatus.OK);
	}
}
