# Instalación
## dependencias
### para instalar el proyecto

- **npm install**

### Si llega a fallar alguna dependencia instalar manualmente:

- **npm install mocha**
- **npm install async**
- **npm install express**
- **npm install mongoose**

---
# Ejecución
###  Ejecución del servidor
- **npm start**

La aplicación por defecto comienza a correr en el puerto 9000, si desea cambiarlo ubique el archivo package.js y cambie el script "start"

### Ejecución de los tests
- **npm test**
### Ejecución del servidor para desarrollo
- **npm install nodemon**
- **sh run.sh** 

O de forma equivalente:

- **nodemon ./app.js localhost PORT**

Cambie **PORT** por algún puerto a elección.


--- 

# Otros
### Testing
- Se ha utilizado Mocha para realizar los test dado que la documentación de Mongoose así lo sugería.
### Base de datos
- Por temas de agilidad en el desarrollo se ha optado el utilizar una base de datos no relacional **Mongo** la cual está montada en una máquina virtual de **Google Cloud**. Además, la base de datos está corriendo bajo un contenedor de **Docker**. 

