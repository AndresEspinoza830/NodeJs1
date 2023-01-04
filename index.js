const express = require('express');
const usuarioRoutes = require('./routes/usuarioRoutes.js')

//Crear la app -> Contiene toda la informacion del servidor de express
const app = express()

//Routing
app.use('/', usuarioRoutes)      //use Busca todas las rutas que inicien con / , en cambio get busca una sola

//Definir un puerto y arrancar el proyecto
const port = 4000;
app.listen(port, () => {
    console.log(`Escuchando desde el puerto:${port}`)
})
