package com.guarderia.entity;

import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "CHILDREN")
@Getter @Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Child implements Serializable {
    @Id
    @Column(name = "DOCUMENT_ID", length = 20)
    private String documentId;

    @Column(name = "ID")
    private Long id;

    @Column(name = "FIRST_NAME", length = 50, nullable = false)
    private String firstName;

    @Column(name = "LAST_NAME", length = 50, nullable = false)
    private String lastName;

    @Column(name = "BIRTH_DATE", nullable = false)
    @Temporal(TemporalType.DATE)
    private Date birthDate;

    @Column(name = "GENDER", length = 20)
    private String gender;

    @Column(name = "MEDICAL_NOTES", length = 200)
    private String medicalNotes;

    @Column(name = "ALLERGIES", length = 100)
    private String allergies;
}
