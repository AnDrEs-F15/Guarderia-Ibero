package com.guarderia.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.guarderia.auth.JwtService;
import com.guarderia.dto.AuthCredentials;
import com.guarderia.dto.ResponseAuth;
import com.guarderia.entity.Child;
import com.guarderia.repository.ChildRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;

import org.springframework.http.MediaType;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

@SpringBootTest
@AutoConfigureMockMvc
@ActiveProfiles("test")
public class ChildTestController  {
    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ChildRepository childRepository;

    @Autowired
    private ObjectMapper objectMapper;

    private String tokenJWT;

    private final Child child = new Child();


    @BeforeEach
    void setUp() throws Exception {
        childRepository.deleteById("0987121");
        child.setId(101342L);
        child.setDocumentId("0987121");
        child.setFirstName("Juan");
        child.setLastName("Pérez");
        child.setBirthDate(java.sql.Date.valueOf("2020-05-01"));
        child.setGender("MASCULINO");
        child.setMedicalNotes("Sin observaciones médicas");
        child.setAllergies("Ninguna");
        childRepository.save(child);
        tokenJWT = JwtService.createToken("test@test.com");
    }

    @Test
    void shouldReturnChildrenById () throws Exception {
        mockMvc.perform(
                MockMvcRequestBuilders
                        .get("/api/child/0987121")
                        .header("Authorization", "Bearer " + tokenJWT)
                )
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.documentId").value("0987121"))
        ;
    }

    @Test
    void shouldReturnCreateChild () throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.post("/api/child")
                        .contentType(MediaType.APPLICATION_JSON)
                        .header("Authorization", "Bearer " + tokenJWT) // si se requiere
                        .content(objectMapper.writeValueAsString(child)))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.documentId").value("0987121"))
                .andExpect(MockMvcResultMatchers.jsonPath("$.firstName").value("Juan"));
    }

    @Test
    void shouldDeleteChild () throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.delete("/api/child/0987121")
                        .header("Authorization", "Bearer " + tokenJWT))
                .andExpect(MockMvcResultMatchers.status().isNoContent());

        // Y confirmamos que ya no existe
        Assertions.assertFalse(childRepository.existsById("0987121"));
    }

    @Test
    void shouldReturnAllChildren() throws Exception {
        mockMvc.perform(
                        MockMvcRequestBuilders
                                .get("/api/child")
                                .header("Authorization", "Bearer " + tokenJWT)
                )
                .andExpect(MockMvcResultMatchers.status().isOk());

    }
}
