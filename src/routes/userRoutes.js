const express = require('express');
const router = express.Router();
// Require controller modules.
const userController = require('../controllers/userController');


router.get('/user',userController.getAllUsers);

router.get('/user/:idpub', userController.getUserById);

router.post('/user', userController.createUser);

module.exports =  router;  // Export the module for use