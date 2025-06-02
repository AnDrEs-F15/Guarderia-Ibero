
---

##  Caso de prueba 1: Login fallido por contraseña incorrecta

###  Objetivo
Verificar que el sistema no permite el ingreso con una contraseña incorrecta.

###  Pasos grabados
1. Abrir la URL: `/guarderia/pages/login`
2. Ingresar el email: `error@auth.com`
3. Ingresar contraseña: `123`
4. Clic en el botón **Iniciar sesión**
5. Esperar mensaje de error

###  Resultado esperado
- El sistema muestra un mensaje como:
  > `"Verifique las credenciales por favor"`
- El usuario **no es redirigido** a la pagina admin.

---

##  Caso de prueba 2: Login exitoso

###  Objetivo
Validar que el sistema permita el acceso con credenciales válidas.

###  Pasos grabados
1. Abrir la URL: `/guarderia/pages/login`
2. Ingresar el email: `test@test.com`
3. Ingresar contraseña: `123`
4. Clic en el botón **Iniciar sesión**
5. Verificar redirección a `/guarderia`

###  Resultado esperado
- El usuario es redirigido al dashboard.
- Se muestra el nombre del usuario o panel correspondiente.

---


---

##  Caso de prueba 3: Validaciones del formulario de inscripción

###  Objetivo
Verificar que el formulario no permita avanzar si hay campos requeridos vacíos o con formato incorrecto.

###  Pasos grabados
1. Navegar a `/guarderia/form-register`
2. Hacer clic en "Siguiente" sin completar los campos
3. Ingresar una fecha inválida o dejar campos vacíos
4. Observar los mensajes de validación

###  Resultado esperado
- Se muestran mensajes de error como:
  > `"Este campo es obligatorio"`  
  > `"El documento de identidad es obligatorio"`  
- No permite avanzar al siguiente paso

---

##  Caso de prueba 4: Inscripción completa exitosa

###  Objetivo
Simular el proceso completo de inscripción llenando todos los campos requeridos y finalizar con éxito.

###  Pasos grabados
1. Navegar a `/guarderia/form-register`
2. Completar los datos del niño/a (nombre, documento, fecha de nacimiento, género, etc.)
3. Completar los datos de contacto y responsables
4. Opcional subir documentos
5. Confirmar la inscripción y enviar
6. Ver la pantalla de **felicitación**

###  Resultado esperado
- El formulario es enviado con éxito
- El sistema redirige a `/congratulation`
- Se muestra un mensaje:
  > `"¡Inscripción completada con éxito!"`

---

##  Caso de prueba 5: Aprobación de solicitud desde el panel administrativo

###  Objetivo
Verificar que un administrador pueda ver y aprobar una solicitud de inscripción pendiente.

###  Pasos grabados
1. Iniciar sesión como administrador
2. Navegar a `/guarderia/dashboard/enrollment`
3. Ver lista de solicitudes pendientes
4. Hacer clic en "Aprobar" para una solicitud específica
5. Confirmar acción

###  Resultado esperado
- La solicitud cambia de estado a "Aprobada"
- Se muestra una notificación de éxito o cambio visual en la fila

---

## 🛠 Cómo ejecutar las pruebas

1. Abrir **Selenium IDE**
2. Cargar los archivos `.side` correspondientes
3. Hacer clic en el botón ▶️ **Run All**
4. Observar los resultados en tiempo real

---