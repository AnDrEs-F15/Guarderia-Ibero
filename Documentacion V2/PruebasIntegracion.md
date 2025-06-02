#  Documentación de Pruebas de Integración – Guardería API

Este documento incluye únicamente las pruebas de integración realizadas para los controladores de autenticación y gestión de niños.

**Fecha de generación:** 31/05/2025

---

## Tabla de Contenidos

1. [Pruebas de Integración - AuthenticationTestController](#1-pruebas-de-integración--authenticationtestcontroller)
2. [Pruebas de Integración - ChildTestController](#2-pruebas-de-integración--childtestcontroller)
3. [Herramientas y Dependencias](#3-herramientas-y-dependencias)
4. [Notas Finales](#4-notas-finales)

---

## 1. Pruebas de Integración – `AuthenticationTestController`

**Clase probada:** `AuthenticationController`  
**Tipo de prueba:** Integración  
**Framework:** Spring Boot Test + MockMvc

###  `shouldReturnTokenAuth`
- **Descripción:** Valida que el login retorna un token JWT válido.
- **Endpoint:** `POST /authentication/login`
- **Entrada esperada:**
```json
{
  "email": "test@test.com",
  "password": "123"
}
```
- **Resultado esperado:** Código `200 OK` y campo `token` presente en la respuesta.

---

## 2. Pruebas de Integración – `ChildTestController`

**Clase probada:** `ChildController`  
**Tipo de prueba:** Integración  
**Framework:** Spring Boot Test + MockMvc  
**Autenticación:** JWT (generado con `JwtService`)

###  `shouldReturnChildrenById`
- **Descripción:** Retorna un niño por su `documentId`.
- **Endpoint:** `GET /api/child/0987121`
- **Resultado esperado:** `200 OK`, campo `"documentId": "0987121"`.

###  `shouldReturnCreateChild`
- **Descripción:** Crea un niño nuevo.
- **Endpoint:** `POST /api/child`
- **Resultado esperado:** `200 OK`, campos `"documentId": "0987121"`, `"firstName": "Juan"`.

###  `shouldDeleteChild`
- **Descripción:** Elimina un niño por su `documentId`.
- **Endpoint:** `DELETE /api/child/0987121`
- **Resultado esperado:** `204 No Content`. Luego se valida que no existe en la base de datos.

###  `shouldReturnAllChildren`
- **Descripción:** Lista todos los niños registrados.
- **Endpoint:** `GET /api/child`
- **Resultado esperado:** `200 OK`.

---

## 3. Herramientas y Dependencias

- **JUnit 5**
- **Spring Boot Test**
- **MockMvc**
- **Jackson (ObjectMapper)**
- **JWT (Json Web Tokens)**

---

## 4. Notas Finales

- Se utilizó MockMvc para simular llamadas HTTP a los controladores reales.
- La autenticación fue manejada mediante tokens generados manualmente con `JwtService`.
- Estas pruebas aseguran que los endpoints funcionen correctamente con las configuraciones de seguridad habilitadas.

---

