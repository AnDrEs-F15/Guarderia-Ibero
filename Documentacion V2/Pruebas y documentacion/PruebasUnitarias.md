# 📘 CourseServiceTest – Documentación de Pruebas Unitarias

**Clase de pruebas:** `CourseServiceTest`  
**Clase probada:** `CourseService`  
**Tipo de prueba:** Unitaria (con Mockito)  
**Objetivo:** Validar el comportamiento del servicio de cursos (`CourseService`), asegurando que la lógica interna se comporta correctamente al interactuar con repositorios simulados.

---

## 🧪 Pruebas Incluidas

### 1. `shouldReturnListAllCourse`
- **Descripción:** Verifica que el servicio retorna correctamente todos los cursos activos.
- **Entrada simulada:** Lista con un solo curso activo.
- **Resultado esperado:** La lista tiene un tamaño de 1 y el turno (`shift`) es `"FullDay"`.

---

### 2. `shouldSaveCourse`
- **Descripción:** Verifica que un curso se guarda correctamente cuando el profesor principal existe.
- **Mocks:**
  - `professorRepository.findById()` retorna un profesor válido.
  - `courseRepository.save()` retorna el curso guardado.
- **Resultado esperado:** El curso retornado no es nulo, tiene el nombre `"COURSE NAME TEST"` y se invoca `save()` una vez.

---

### 3. `shouldReturnIfCourseExist`
- **Descripción:** Verifica si el servicio confirma la existencia de un curso por ID.
- **Entrada simulada:** ID de un curso existente.
- **Resultado esperado:** `true`.

---

### 4. `shouldReturnFalseIfCourseNotExists`
- **Descripción:** Verifica el comportamiento cuando se consulta por un curso inexistente.
- **Mocks:** `existsById()` retorna `false`.
- **Resultado esperado:** `false`.

---

### 5. `shouldDeleteCourseById`
- **Descripción:** Verifica que el servicio elimina correctamente un curso por su ID.
- **Mocks:** `deleteById()` no hace nada (void).
- **Resultado esperado:** El método `deleteById()` es invocado exactamente una vez.

---

### 6. `shouldReturnCourseById`
- **Descripción:** Verifica que el servicio puede encontrar y retornar un curso existente por ID.
- **Mocks:** `findById()` retorna un `Optional` con el curso.
- **Resultado esperado:** El curso está presente (`isPresent = true`) y el repositorio fue invocado una vez.

---

### 7. `shouldReturnCoursePageable`
- **Descripción:** Verifica que el servicio retorna una lista paginada de cursos correctamente.
- **Mocks:**
  - `findAll(Pageable)` retorna una página con dos cursos.
- **Resultado esperado:**
  - Total de elementos: 2.
  - El turno del primer curso es `"FullDay"`.

---

## 🛠️ Herramientas y Dependencias

- **Framework de pruebas:** JUnit 5 (`@Test`, `@BeforeEach`, `@DisplayName`)
- **Mocking:** Mockito (`@Mock`, `@InjectMocks`, `when`, `verify`)
- **Extensión:** `@ExtendWith(MockitoExtension.class)`

---

