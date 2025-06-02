package com.guarderia.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
@Data
@AllArgsConstructor
public class RegisterAuth {
    private String documentId;
    private String password;
    private String email;
    private String fullName;
}
