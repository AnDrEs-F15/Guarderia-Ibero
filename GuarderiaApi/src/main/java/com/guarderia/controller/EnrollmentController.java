package com.guarderia.controller;

import com.guarderia.constants.PathsApp;
import com.guarderia.entity.Child;
import com.guarderia.entity.Enrollments;
import com.guarderia.service.EnrollmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(PathsApp.URI_ENROLLMENT)
@RequiredArgsConstructor
public class EnrollmentController {
    private final EnrollmentService enrollmentService;
    @GetMapping
    public List<Enrollments> getAllEnrollments() {
        return enrollmentService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Enrollments> getEnrollmentsById(@PathVariable Long id) {
        return enrollmentService.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Enrollments createEnrollments(@RequestBody Enrollments child) {
        return enrollmentService.save(child);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Enrollments> updateEnrollments(@PathVariable Long id, @RequestBody Enrollments child) {
        if (!enrollmentService.existsEnrollmentsById(id)) return ResponseEntity.notFound().build();
        return ResponseEntity.ok(enrollmentService.save(child));
    }

    @PatchMapping("/{id}/{status}")
    public ResponseEntity<Enrollments> updateEnrollments(@PathVariable Long id, @PathVariable String status) {
        if (!enrollmentService.existsEnrollmentsById(id)) return ResponseEntity.notFound().build();
        return ResponseEntity.ok(enrollmentService.updateStatus(id,status));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEnrollments(@PathVariable Long id) {
        if (!enrollmentService.existsEnrollmentsById(id)) return ResponseEntity.notFound().build();
        enrollmentService.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/{courseId}/students")
    public ResponseEntity<List<Child>> getStudentsAcceptByCourse(@PathVariable Long courseId) {
        return enrollmentService.getStudentsAcceptByCourse(courseId)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}
