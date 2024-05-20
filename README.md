# Valley Route Frontend

This is the frontend for the Valley Route project. It is a Vue application that allow users to:

- View the map of the Valley Route routes
- View all packages created by the users
- Create a new package
- View statistics of the packages
- Register and login to the application

# Tabla de Contenidos

1. [Project setup](#project-setup)
2. [Compiles and hot-reloads for development](#compiles-and-hot-reloads-for-development)
3. [Infraestructura](#infraestructura)
4. [Estructura de Archivos](#estructura-de-archivos)
5. [Flujo de ejecución](#flujo-de-ejecución)

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

## Infraestructura

- **Vue.js**: Framework de JavaScript para construir interfaces de usuario y aplicaciones de una sola página.
- **Vue Router**: Librería de Vue.js que permite la navegación entre las diferentes vistas de la aplicación.
- **Pinia**: Librería de Vue.js que permite el manejo de estados de la aplicación.
- **Axios**: Librería de JavaScript que permite realizar peticiones HTTP.

## Estructura de Archivos

- **src/**

  - **assets/**: Archivos estáticos de la aplicación.
  - **components/**: Componentes de Vue.js.
  - **router/**: Configuración de las rutas de la aplicación.
  - **store/**: Configuración de los estados de la aplicación.
  - **views/**: Vistas de la aplicación.
  - **App.vue**: Componente principal de la aplicación.
  - **main.ts**: En este archivo se inicializa la aplicación con el plugin de Vue.js, Pinia, Monta la aplicación en el DOM en el elemento con el id `app`.

- **.env.example**: Archivo de configuración de variables de entorno.
- **.eslintrc.js**: Archivo de configuración de ESLint. Este archivo se utiliza para definir las reglas de linteo de código.
- **.ginignore**: Archivo de configuración de los archivos que se ignoran en Git.
- **.prettierrc**: Archivo de configuración de Prettier. Este archivo se utiliza para definir las reglas de formato de código.
- **package.json**: Archivo de configuración de los paquetes de Node.js.
- **postcss.config.js**: Archivo de configuración de PostCSS. Este archivo se utiliza para definir las reglas de PostCSS. Para TailwindCSS.
- **README.md**: Archivo de documentación del proyecto.
- **tailwind.config.js**: Archivo de configuración de TailwindCSS. Este archivo se utiliza para definir las reglas de TailwindCSS. Como los colores, fuentes, tamaños, etc.
- **tsconfig.json**: Archivo de configuración de TypeScript. Este archivo se utiliza para definir las reglas de TypeScript.
- **tsconfig.app.json**: Archivo de configuración de TypeScript. Este archivo se utiliza para definir las reglas de TypeScript para la aplicación.
- **tsconfig.node.json**: Archivo de configuración de TypeScript. Este archivo se utiliza para definir las reglas de TypeScript para Node.js.
- **vite.config.ts**: Archivo de configuración de Vite. Este archivo se utiliza para definir las reglas de Vite. Como plugins, alias, etc.

## Flujo de ejecución

1. **main.ts**: En este archivo se inicializa la aplicación con el plugin de Vue.js, Pinia, Monta la aplicación en el DOM en el elemento con el id `app`.

2. **App.vue**: Componente principal de la aplicación. En este archivo se definen las rutas de la aplicación y se importan los componentes de Vue.js.

3. **router/index.ts**: Configuración de las rutas de la aplicación. En este archivo se definen las rutas de la aplicación y se importan los componentes de Vue.js.

4. **store/user.ts**: Manejo del estado del usuario autenticado. En este archivo se definen guardan los datos del usuario autenticado y se proveen métodos para acceder a estos datos.

5. **views/Login.vue**: Vista de inicio de sesión. En esta vista se muestra el formulario de inicio de sesión y se proveen métodos para autenticar al usuario.

6. **Servicios** (Axios): En este archivo se definen los métodos para realizar peticiones HTTP a la API. Las peticiones se realizan a través de Axios. Los métodos de los servicios se importan en los componentes de Vue.js. Estos servicios se encargan de realizar las peticiones HTTP a la API, manejar los errores y retornar los datos con un formato específico, este formato esta definido por los modelos de la aplicación, los cuales se encuentran en la carpeta `models`.

## Autor

Santiago Castro - Desarrollador de software y estudiante de ingeniería de sistemas en la Universidad Nacional de Colombia.

[![GitHub](https://img.shields.io/badge/GitHub-Profile-blue?style=flat-square&logo=github)](https://github.com/sacastrot)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Profile-blue?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/santiago-castro-tabares/)
[![Stack Overflow](https://img.shields.io/badge/Stack%20Overflow-Profile-blue?style=flat-square&logo=stackoverflow)](https://stackoverflow.com/users/19891867/santiago)
