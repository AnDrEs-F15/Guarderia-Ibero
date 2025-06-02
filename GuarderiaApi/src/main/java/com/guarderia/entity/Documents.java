package com.guarderia.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@Table(name = "DOCUMENTS")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Documents {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "ENROLLMENT_ID", nullable = false)
    private Enrollments enrollment;

    @Column(name = "FILE_NAME", length = 100)
    private String fileName;

    @Column(name = "FILE_URI", length = 500)
    private String fileUri;

    @Column(name = "FILE_TYPE", length = 50)
    private String fileType;

    @Column(name = "FILE_CONTENT")
    private byte[] fileContent;

    @Column(name = "UPLOAD_DATE")
    @Temporal(TemporalType.DATE)
    private Date uploadDate;
}
