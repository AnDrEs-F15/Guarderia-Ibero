package com.guarderia.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.Date;
import java.util.List;

@Entity
@Table(name = "USERS")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Long userId;

    @Column(name = "DOCUMENT_ID", length = 50, unique = true, nullable = false)
    private String documentId;

    @Column(name = "PASSWORD_HASH", length = 255, nullable = false)
    private String password;

    @Column(name = "ROLE", length = 20, nullable = true)
    @Builder.Default
    private String role = "ADMIN";

    @Column(name = "ACTIVE", length = 1, columnDefinition = "CHAR(1) DEFAULT 'Y'")
    private String active;

    @Column(name = "CREATED_AT")
    @Temporal(TemporalType.DATE)
    private Date createdAt;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<UserRole> userRoles;

    public void setPassword(String password) {
        this.password = new BCryptPasswordEncoder().encode(password);
    }

}
