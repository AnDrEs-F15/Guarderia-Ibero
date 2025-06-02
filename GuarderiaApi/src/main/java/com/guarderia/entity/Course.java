package com.guarderia.entity;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;


@Entity
@Table(name = "COURSES")
@Data @Builder @AllArgsConstructor @NoArgsConstructor
public class Course  {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Long id;

    @Column(name = "NAME_COURSE", nullable = false, length = 50)
    private String nameCourse;

    @Column(name = "MIN_AGE_MONTHS", nullable = false)
    private Integer minAgeMonths;

    @Column(name = "MAX_AGE_MONTHS", nullable = false)
    private Integer maxAgeMonths;

    @Column(name = "MAX_CAPACITY", nullable = false)
    private Integer maxCapacity;

    @Column(name = "SHIFT", length = 20)
    private String shift; // 'Morning', 'Afternoon', 'FullDay'

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "MAIN_TEACHER_ID", referencedColumnName = "DOCUMENT_ID")
    @JsonIgnoreProperties({"listCourse", "hibernateLazyInitializer", "handler"})
    private Professor mainTeacher;

    @Transient
    private String mainTeacherId;



    @Column(name = "LOCATION", length = 100)
    private String location;

    @Column(name = "ACTIVE", nullable = false)
    private String active = "Y"; // Valor por defecto 'Y'

}
