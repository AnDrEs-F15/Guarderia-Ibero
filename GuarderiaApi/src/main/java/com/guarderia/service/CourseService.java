package com.guarderia.service;

import com.guarderia.entity.Course;
import com.guarderia.repository.CourseRepository;
import com.guarderia.repository.ProfessorRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CourseService {
    private final CourseRepository courseRepository;
    private final ProfessorRepository professorRepository;
    public Page<Course> findAll( Pageable pageable) {
        return courseRepository.findAll(pageable);
    }
    public List<Course> findAllByActive() {
        return courseRepository.findAllByActive();
    }
    public Optional<Course> findById(Long courseId) {
        return courseRepository.findById(courseId);
    }

    public Course save(Course child) {
        child.setMainTeacher(professorRepository.findById(child.getMainTeacherId()).orElse(null));
        return courseRepository.save(child);
    }

    public void deleteById(Long courseId) {
        courseRepository.deleteById(courseId);
    }

    public boolean existsCourseById(Long courseId) {
        return courseRepository.existsById(courseId);
    }
}
