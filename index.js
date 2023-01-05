import express from 'express';
import usuarioRoutes from './routes/usuarioRoutes.js';

//Crear la app -> Contiene toda la informacion del servidor de express
const app = express()

//Routing
app.use('/auth', usuarioRoutes)      //use Busca todas las rutas que inicien con /auth o cualquier cosa, en cambio get busca una sola

//Carpeta publica
app.use(express.static('public'));

//Habilitar pug
app.set('view engine', 'pug')       //set es para agregar configuracion, le decimos que usaremos pug
app.set('views', './views')         //Le decimos donde estan nuestras vistas, ya no es necesario especificarlo en las rutas

//Definir un puerto y arrancar el proyecto
const port = 4000;
app.listen(port, () => {
    console.log(`Escuchando desde el puerto:${port}`)
})
