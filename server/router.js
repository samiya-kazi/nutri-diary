const express = require('express');
const router = express.Router();
const foodController = require('./controllers/food');
const userController = require('./controllers/user');

router.post('/food', foodController.addFood);
router.get('/food', foodController.findFood);

router.post('/login', userController.login);
router.post('/register', userController.register);

module.exports = router;