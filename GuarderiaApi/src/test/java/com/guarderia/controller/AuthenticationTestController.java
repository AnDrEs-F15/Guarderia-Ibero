package com.guarderia.controller;


import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.guarderia.dto.AuthCredentials;
import com.guarderia.dto.ResponseAuth;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

@SpringBootTest
@AutoConfigureMockMvc
public class AuthenticationTestController {
    @Autowired
    private MockMvc mockMvc;
    @Autowired
    private ObjectMapper objectMapper;

    protected  String tokenJWT;

    @Test
    void shouldReturnTokenAuth () throws Exception {
        AuthCredentials authCredentials = new AuthCredentials("test@test.com", "123");
        MvcResult auth = mockMvc.perform(MockMvcRequestBuilders.post("/authentication/login")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(authCredentials)))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.token").exists())
               .andReturn();

        ResponseAuth responseAuth = objectMapper.readValue(
                auth.getResponse().getContentAsString(),
                ResponseAuth.class
        );

        tokenJWT = responseAuth.getToken();
    }
}
