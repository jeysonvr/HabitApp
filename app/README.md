## HabitApp app móvil

Este es un proyecto dearrollado con ionic (react) en su versión 6.0.

### Estructura del proyecto
````
├── apk # Instalador de android con la última versión del proyecto
├── public # Archivos publicos del proyecto (img, json, etc)
└── src # Componentes y configuraciones
└── README.md # Estás aquí
````

### Uso local
Para correr el proyecto de manera local debe descargar el código de este repositorio (carpeta 'app') y ejecutar los siguientes comandos:

* Instalar dependencias: `> npm install`
* Iniciar un servidor: `> ionic serve`

Luego, podrá dirigirse en su navegador a la ruta `localhost:8100` y allí podrá navegar sobre la aplicación.

### Uso en dispositivo físico (android)
Puede descargar el apk de la última versión generada por el equipo, la cual se encuentra en la ruta `/app/apk/app-debug.apk`. Una vez descargada en su dispositivo android, este le preguntará si desea instalarla. Una vez instalada podrá hacer uso de la aplicación desde su celular.

### Más información
Para generar un nuevo instalador, puede seguir la documentación del equipo de [Ionic framework](https://ionicframework.com/).
