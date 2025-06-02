package com.guarderia.services;

import com.guarderia.entity.Course;
import com.guarderia.entity.Professor;
import com.guarderia.repository.CourseRepository;
import com.guarderia.repository.ProfessorRepository;
import com.guarderia.service.CourseService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import java.util.List;
import java.util.Optional;

@ExtendWith(MockitoExtension.class)
public class CourseServiceTest {
    @Mock
    private CourseRepository courseRepository;
    @Mock
    private ProfessorRepository professorRepository;
    @InjectMocks
    private CourseService courseService;
    private Course test;
    @BeforeEach
    void setup (){
        test = Course
                .builder()
                .id(1L).nameCourse("COURSE NAME TEST").shift("FullDay")
                .mainTeacher( Professor.builder()
                                .documentId("0001")
                                .firstName("Professor Name")
                                .lastName("LastName Test").build())
                .location("Floor 4").maxAgeMonths(12).maxCapacity(20)
                .mainTeacherId("0002")
                .build();
    }

    @Test
    @DisplayName("Deberia encontrar una lista de todos los cursos disponibles o activos")
    public  void shouldReturnListAllCourse () {
        List<Course> courses = List.of(test);
        Mockito.when(courseRepository.findAllByActive()).thenReturn(courses);
        List<Course> result = courseService.findAllByActive();
        Assertions.assertEquals(1, result.size() );
        Assertions.assertEquals("FullDay", result.get(0).getShift() );
    }

    @Test
    @DisplayName("Deberia guardar un registro Course")
    public  void shouldSaveCourse () {
        Mockito.when(professorRepository.findById(Mockito.any(String.class)))
                .thenReturn(Optional.ofNullable(test.getMainTeacher()));
        Mockito.when(courseRepository.save(test)).thenReturn(test);
        Course result = courseService.save(test);
        Assertions.assertNotNull(result );
        Assertions.assertEquals("COURSE NAME TEST", result.getNameCourse() );
        Mockito.verify( courseRepository, Mockito.times(1) )
                .save(Mockito.any(Course.class));
    }

    @Test
    @DisplayName("Deberia encontrar un curso completo por ID")
    public  void shouldReturnIfCourseExist() {
        Mockito.when(courseRepository.existsById(test.getId())).thenReturn(true);
        Boolean result = courseService.existsCourseById(test.getId());
        Assertions.assertEquals(true, result );
    }

    @Test
    @DisplayName("Debería retornar false si el curso no existe por ID")
    public void shouldReturnFalseIfCourseNotExists() {
        Mockito.when(courseRepository.existsById(test.getId())).thenReturn(false);
        Assertions.assertFalse(courseService.existsCourseById(test.getId()));
    }

    @Test
    @DisplayName("Debería eliminar un curso por ID")
    public void shouldDeleteCourseById() {
        Mockito.doNothing().when(courseRepository).deleteById(test.getId());
        courseService.deleteById(test.getId());
        Mockito.verify(courseRepository, Mockito.times(1) ).deleteById(test.getId());
    }

    @Test
    @DisplayName("Debería retornar informacion de un curso por ID")
    public void shouldReturnCourseById() {
        Mockito.when(courseRepository.findById(test.getId())).thenReturn(Optional.of(test));
        Optional<Course> course = courseService.findById(test.getId());
        Mockito.verify(courseRepository, Mockito.times(1) ).findById(test.getId());
        Assertions.assertTrue(course.isPresent());
    }

    @Test
    @DisplayName("Deberia retornar una lista paginada de Courses")
    public void shouldReturnCoursePageable() {
        Pageable pageable = PageRequest.of(0,10);
        List<Course> courses = List.of(test, new Course());
        Page<Course> coursePage = new PageImpl<>(courses,pageable,courses.size());

        Mockito.when(courseRepository.findAll(pageable)).thenReturn(coursePage);
        Page<Course> result = courseService.findAll(pageable);
        Mockito.verify(courseRepository, Mockito.times(1) ).findAll(pageable);
        Assertions.assertEquals(2, result.getTotalElements());
        Assertions.assertEquals("FullDay" , result.getContent().get(0).getShift() );
    }

}
