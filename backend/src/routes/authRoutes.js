const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// DIAGNÓSTICO: Ver qué tiene authController
console.log('========== DIAGNÓSTICO authController ==========');
console.log('register:', typeof authController.register);
console.log('login:', typeof authController.login);
console.log('getProfile:', typeof authController.getProfile);
console.log('getUsers:', typeof authController.getUsers);
console.log('==============================================');

// Rutas
router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/profile/:userId', authController.getProfile);

// Comentar temporalmente esta línea problemática
// router.get('/users', authController.getUsers);

module.exports = router;