package com.guarderia.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@Table(name = "ENROLLMENTS")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Enrollments {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "CHILD_ID", nullable = false)
    private Child child;

    @ManyToOne
    @JoinColumn(name = "GUARDIAN_ID", nullable = false)
    private Guardian guardian;

    @ManyToOne
    @JoinColumn(name = "COURSE_ID" )
    private Course course; // Assuming Course entity exists elsewhere

    @Column(name = "ENROLL_DATE")
    @Temporal(TemporalType.DATE)
    private Date enrollDate;

    @Column(name = "STATUS_ENROLLMENT", length = 20, columnDefinition = "VARCHAR(20) DEFAULT 'Pending'")
    private String statusEnrollment;


    @Transient
    private String childId;
    @Transient
    private String attendantId;

    @Transient
    private Long courseId;
}
