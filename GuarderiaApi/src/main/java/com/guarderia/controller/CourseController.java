package com.guarderia.controller;

import com.guarderia.constants.PathsApp;
import com.guarderia.entity.Course;
import com.guarderia.service.CourseService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(PathsApp.URI_COURSE)
@RequiredArgsConstructor
public class CourseController {
    private final CourseService courseService;
    @GetMapping
    public Page<Course> getAllCourse(@PageableDefault Pageable pageable) {
        return courseService.findAll(pageable);
    }

    @GetMapping("/active")
    public List<Course> getAllCourse() {
        return courseService.findAllByActive();
    }
    @GetMapping("/{id}")
    public ResponseEntity<Course> getCourseById(@PathVariable Long id) {
        return courseService.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Course createCourse( @RequestBody Course child) {
        System.out.println(child.getMainTeacher());
        return courseService.save(child);
    }

   /* @PutMapping("/{id}")
    public ResponseEntity<Course> updateCourse(@PathVariable Long id, @RequestBody Course child) {
        if (!courseService.existsCourseById(id)) return ResponseEntity.notFound().build();
        return ResponseEntity.ok(courseService.save(child));
    }

    */

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCourse(@PathVariable Long id) {
        if (!courseService.existsCourseById(id)) return ResponseEntity.notFound().build();
        courseService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
