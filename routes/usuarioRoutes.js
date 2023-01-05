import express from 'express';
import { formularioLogin, formularioRegistro } from '../controllers/usuarioController.js';

const router = express.Router();

// Routing
router.get('/login', formularioLogin)           //req es lo que envias al servidor de node y res es la respuesta del servidor
router.get('/registro', formularioRegistro)     //send devuelve un texto plano , json devuelve un json y render devuelve una vista                   

// router.route('/')
//     .get((req, res) => {
//         res.json({ msg: 'Hola mundo en express' })
//     })
//     .post((req, res) => {
//         res.json({ msg: 'Respuesta de Tipo Post' })
//     })

export default router