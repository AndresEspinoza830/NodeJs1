const express = require('express');

//Crear la app -> Contiene toda la informacion del servidor de express
const app = express()

//Routing
app.get('/', (req, res) => {     //req es lo que envias al servidor de node y res es la respuesta del servidor
    res.send('Hola mundo en express')          //send devuelve un texto plano , json devuelve un json y render devuelve una vista
})

app.get('/nosotros', (req, res) => {
    res.send('Informacion sobre nosotros')
})

//Definir un puerto y arrancar el proyecto
const port = 4000;
app.listen(port, () => {
    console.log(`Escuchando desde el puerto:${port}`)
})
