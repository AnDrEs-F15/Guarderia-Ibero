package com.guarderia.controller;

import com.guarderia.dto.AuthCredentials;
import com.guarderia.dto.RegisterAuth;
import com.guarderia.dto.ResponseAuth;
import com.guarderia.entity.User;
import com.guarderia.service.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/authentication")
@RequiredArgsConstructor
public class AuthenticationController {
    private final AuthenticationService service;
    @PostMapping
    ResponseEntity<User> registerUser (@RequestBody RegisterAuth user) {
        return ResponseEntity.ok(service.saveUser(user));
    }
    @PostMapping("/login")
    ResponseEntity<ResponseAuth> generateToken (@RequestBody AuthCredentials authCredentials) {
        return ResponseEntity.ok(service.generateToken(authCredentials));
    }
}
