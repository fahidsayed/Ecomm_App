package com.ecomm.mango.service;

import java.util.Optional;

import org.hibernate.exception.ConstraintViolationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.ecomm.grapes.entity.User;
import com.ecomm.grapes.repository.UserRepo;
import com.ecomm.mango.exception.MangoApplicationException;
import com.ecomm.mango.models.SignUpRequest;

@Service
public class MyUserDetailsService implements UserDetailsService {

	@Autowired
	private UserRepo userRepo;

	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		Optional<User> user = userRepo.findByEmail(email);
		user.orElseThrow(() -> new UsernameNotFoundException("Not Found! " + email));
		return user.map(MyUserDetails::new).get();
	}
	
	public User createNewUserAccount(SignUpRequest signUpRequest) {
		User newUser= User.builder().activeUser(true).password(signUpRequest.getPassword()).email(signUpRequest.getEmail())
				.firstName(signUpRequest.getFirstName()).lastName(signUpRequest.getLastName())
				.dateOfBirth(signUpRequest.getDateOfBirth()).phone(signUpRequest.getPhone()).build();
		
		if(userRepo.existsByEmail(newUser.getEmail())) {
			throw new MangoApplicationException("Account with Email "+newUser.getEmail()+" already exists.");
		}
		User savedUser=null;
		try {			
			savedUser = userRepo.save(newUser);
		}
		catch(Exception e) {
			throw new MangoApplicationException(e.getMessage());
		}
		return savedUser;
	}
}
