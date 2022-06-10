# GREENTER
Greenter es una aplicación destinada a consulta de plantas medicinales y sus características.
Puedes visitarla en https://greenter.netlify.app/

## DESCRIPCIÓN

Aplicación de Fitoterapia donde los usuarios pueden consultar información sobre plantas medicinales y sus usos. También pueden registrarse para formar parte de la comunidad de Greenter y poder comentar o realizar preguntas a otros usuarios en las fichas de cada planta.

### USUARIOS Y ADMIN

- Registrarse: el usuario puede registrarse
- Iniciar sesión : el usuario puede iniciar sesión después de registrarse.
- Cerrar sesión: El usuario cuando está logado puede cerrar sesión.
- Perfil : los usuarios registrados pueden acceder a su perfil.
- Editar perfil: los usuarios registrados pueden editar su perfil, incluyendo el cambio de imagen.
- Consulta de información: los usuarios, estén o no registrados pueden acceder a la información sobre las plantas que hay en la aplicación.
- Dejar comentarios en las fichas de las plantas: los usuarios registrados pueden dejar comentarios o preguntas en la ficha de cada planta.
- Página 404: si los usuarios intentan acceder a una ruta que no exite podrán visualizar la página de error.
- Página Error: error de servidor o problema con rutas.
-Admin: el administrador es el único que puede añadir, editar y borrar información de la aplicación. También es el único que añade a otros administradores ya que por defecto en el aparece usuario.

### ESTRUCTURA: 

La estructura de rutas de front-end con React:

### RUTAS DE FRONT-END

- "/" - Home 
- "/plantas" - Listao de plantas
- "/plantas/:id/details" - Fichas con los detalles de cada planta
- "/plantas/:id/edit" - Edición de la información de la planta
- IsPrivate - Página privada
- "/plantas/plantaAdd" - Añadir una nueva planta
- "/signup" - Registro de nuevo usuario
- "/login" - Inicio de sesión del usuario registrado
- "/profile" - Perfil del usuario
- "/profile/edit" - Edición de perfil de usuario
- "/error" - Página de error
- "*"  - Página  NorFound
- "/fitoterapia" - Información primera sección
- "/obtencion" - Información segunda sección
- "/recoleccion" - Información tercera sesión
       
        
### RUTAS DE BACK-END

## Auth Routes
- POST "/api/auth/signup" - registrar un usuario
- POST "/api/auth/login" - verificar las credenciales del usuario y abrir "sesion"
- GET "/api/auth/verify" - checkea que el token es valido, y el rol del admin
## Index Routes
- "./profile.routes.js" - Perfil
- "./uploader.routes" - Edición del perfil

## Plantas Routes
- GET "/api/plantas" - listado de plantas (por nombre)
- POST "api/plantas" - creación de una Planta nueva
- GET "/api/plantas/:id" - detalles
- DELETE "/api/plantas/:id" - borrar
- PATCH "/api/plantas/:id" - editar
- GET "/api/plantas/:id/comentarios" - para ver los comentarios
POST "/api/plantas/:id" - añadir comentarios 
- GET "/api/profile" - Donde se loguea el usuario
- PATCH "/api/profile" - Edición de perfil de usuario

### Modelos
- Comentarios
- Planta
- Usuario

### Páginas

- Login
- Signup
- Error
- NorFound
- Fitoterapia
- Obtención
- Recolección
- Home
- PlantaAdd
- PlantaDetails
- PlantaEdit
- PlantaList
- Services: auth
- Services: comentarios
- Services: config
- Services: Planta
- Services: profile
- App css
- App js
- App test
- Index

### Componentes
- Comentario
- AllComentarios
- IsPrivate
- Navbar

### ENLACES

### GitHub

https://github.com/rdr12/greenter-client
https://github.com/rdr12/greenter-server

### Deployment

https://greenter.netlify.app/

### Presentación
https://docs.google.com/presentation/d/13fJhVAvf14OLty1ynxRIh1X36rkln7vhJqQVkE-VHTQ/edit?usp=sharing


