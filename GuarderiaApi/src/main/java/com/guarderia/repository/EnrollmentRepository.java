package com.guarderia.repository;

import com.guarderia.entity.Child;
import com.guarderia.entity.Enrollments;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface EnrollmentRepository extends JpaRepository<Enrollments, Long> {
    @Query("SELECT en.child " +
            "FROM Enrollments en " +
            "WHERE en.statusEnrollment = 'Aprobado' " +
            "AND en.course.id = :courseId ")
    Optional<List<Child>> getStudentsAcceptByCourse (@Param("courseId") Long courseId );

    List<Enrollments> findAllByOrderByIdDesc();
}
