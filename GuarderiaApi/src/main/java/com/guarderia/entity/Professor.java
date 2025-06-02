package com.guarderia.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Table(name = "TEACHERS")
@Data @Builder @AllArgsConstructor @NoArgsConstructor
public class Professor {
    @Id
    @Column(name = "DOCUMENT_ID", length = 20)
    private String documentId;

    @Column(name = "FIRST_NAME", length = 50, nullable = false)
    private String firstName;

    @Column(name = "LAST_NAME", length = 50, nullable = false)
    private String lastName;

    @Column(name = "PHONE_NUMBER", length = 20)
    private String phoneNumber;

    @Column(name = "EMAIL", length = 100)
    private String email;

    @Column(name = "ACTIVE", length = 1, columnDefinition = "CHAR(1) DEFAULT 'Y'")
    private String active;

    @OneToMany(mappedBy = "mainTeacher" , fetch = FetchType.LAZY)
    @JsonIgnore
    private List<Course> listCourse;
}
