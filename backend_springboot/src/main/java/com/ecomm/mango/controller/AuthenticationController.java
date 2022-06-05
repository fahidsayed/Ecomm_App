package com.ecomm.mango.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ecomm.grapes.entity.User;
import com.ecomm.mango.exception.MangoApplicationException;
import com.ecomm.mango.models.AuthenticationRequest;
import com.ecomm.mango.models.AuthenticationResponse;
import com.ecomm.mango.models.SignUpRequest;
import com.ecomm.mango.models.SignUpResponse;
import com.ecomm.mango.service.MyUserDetailsService;
import com.ecomm.mango.util.JwtUtil;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
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
			//change username to email
			authenticationManager.authenticate(
					new UsernamePasswordAuthenticationToken(authRequest.getEmail(), authRequest.getPassword()));
		} catch (AuthenticationException e) {
			throw new MangoApplicationException("Bad Credentials " + e);
		}
		UserDetails userDetails = myUserDetailsService.loadUserByUsername(authRequest.getEmail());
		String token = jwtUtil.generateToken(userDetails);
		AuthenticationResponse response = AuthenticationResponse.builder().jwt(token).build();
		return new ResponseEntity<AuthenticationResponse>(response, HttpStatus.OK);
	}

	@PostMapping("/signup")
	public ResponseEntity<SignUpResponse> createUserAccount(@RequestBody SignUpRequest signUpRequest) {
		User user =null;
		try {
			user = myUserDetailsService.createNewUserAccount(signUpRequest);
		}
		catch(Exception e) {
			return new ResponseEntity(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
		}
		if (user != null && user.getUserId() > 0) {
			SignUpResponse signUpResponse = SignUpResponse.builder().signUpSuccessFlag(true)
					.message("User Added successfully with user id: " + user.getUserId()).build();
			return new ResponseEntity<SignUpResponse>(signUpResponse, HttpStatus.OK);
		} else {
			SignUpResponse signUpResponse = SignUpResponse.builder().signUpSuccessFlag(false)
					.message("Failed due to some reason").build();
			return new ResponseEntity<SignUpResponse>(signUpResponse, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
