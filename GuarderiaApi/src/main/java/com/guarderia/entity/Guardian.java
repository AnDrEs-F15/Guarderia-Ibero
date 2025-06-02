package com.guarderia.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "GUARDIANS")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Guardian {
    @Id
    @Column(name = "DOCUMENT_ID", length = 20, unique = true, nullable = false)
    private String documentId;

    @Column(name = "FIRST_NAME", length = 50, nullable = false)
    private String firstName;

    @Column(name = "LAST_NAME", length = 50, nullable = false)
    private String lastName;

    @Column(name = "RELATIONSHIP", length = 20)
    private String relationship;

    @Column(name = "PHONE_NUMBER", length = 20)
    private String phoneNumber;

    @Column(name = "EMAIL", length = 100)
    private String email;

}
