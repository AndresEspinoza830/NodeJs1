const express = require('express');
const router = express.Router();

// Routing
router.get('/', (req, res) => {     //req es lo que envias al servidor de node y res es la respuesta del servidor
    res.json({ msg: 'Hola mundo en express' })          //send devuelve un texto plano , json devuelve un json y render devuelve una vista
})

router.post('/', (req, res) => {
    res.json({ msg: 'Respuesta de Tipo Post' })
})

// router.route('/')
//     .get((req, res) => {
//         res.json({ msg: 'Hola mundo en express' })
//     })
//     .post((req, res) => {
//         res.json({ msg: 'Respuesta de Tipo Post' })
//     })

module.exports = router