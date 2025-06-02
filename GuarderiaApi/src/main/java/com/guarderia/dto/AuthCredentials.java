package com.guarderia.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data @AllArgsConstructor
public class AuthCredentials {
    private String username ;
    private String password;
}
