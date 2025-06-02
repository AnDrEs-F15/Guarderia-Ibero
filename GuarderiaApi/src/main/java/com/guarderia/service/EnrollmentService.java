package com.guarderia.service;

import com.guarderia.entity.Child;
import com.guarderia.entity.Enrollments;
import com.guarderia.repository.AttendantRepository;
import com.guarderia.repository.ChildRepository;
import com.guarderia.repository.CourseRepository;
import com.guarderia.repository.EnrollmentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class EnrollmentService {
    private final EnrollmentRepository enrollmentRepository;
    private final ChildRepository childRepository;
    private final AttendantRepository attendantRepository;
    private final CourseRepository courseRepository;

    public List<Enrollments> findAll() {
        return enrollmentRepository.findAllByOrderByIdDesc();
    }

    public Optional<Enrollments> findById(Long enrollmentId) {
        return enrollmentRepository.findById(enrollmentId);
    }
    public Optional<List<Child>> getStudentsAcceptByCourse(Long courseId) {
        return enrollmentRepository.getStudentsAcceptByCourse(courseId);
    }

    public Enrollments save(Enrollments enrollments) {
        enrollments.setChild(childRepository.findById(enrollments.getChildId()).orElse(null));
        enrollments.setGuardian(attendantRepository.findById(enrollments.getAttendantId()).orElse(null));
        enrollments.setCourse(courseRepository.findById(enrollments.getCourseId()).orElse(null));
        enrollments.setEnrollDate(new Date());
        return enrollmentRepository.save(enrollments);
    }

    public Enrollments updateStatus(Long id, String status) {
        Enrollments enrollment = enrollmentRepository.findById(id).orElse(null);
        System.out.println(status);
        enrollment.setStatusEnrollment(status);
        return enrollmentRepository.save(enrollment);
    }

    public void deleteById(Long enrollmentId) {
        enrollmentRepository.deleteById(enrollmentId);
    }

    public boolean existsEnrollmentsById(Long enrollmentId) {
        return enrollmentRepository.existsById(enrollmentId);
    }
}
