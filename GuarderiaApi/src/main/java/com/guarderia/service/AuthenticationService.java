package com.guarderia.service;

import com.guarderia.auth.JwtService;
import com.guarderia.dto.AuthCredentials;
import com.guarderia.dto.RegisterAuth;
import com.guarderia.dto.ResponseAuth;
import com.guarderia.entity.User;
import com.guarderia.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final UserRepository userRepository;
    private final AuthenticationManager authenticationManager;

    public ResponseAuth generateToken(AuthCredentials credentials) {
        System.out.println(credentials);
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        credentials.getUsername(),
                        credentials.getPassword()
                )
        );
        return new ResponseAuth(JwtService.createToken(credentials.getUsername()));
    }


    public User saveUser (RegisterAuth user) {
        System.out.println(user);
        User register = new User();
        register.setDocumentId(user.getDocumentId());
        register.setPassword(user.getPassword());
        register.setActive("Y");
        return userRepository.save(register);
    }
}
