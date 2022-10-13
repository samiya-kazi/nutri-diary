const express = require('express');
const router = express.Router();
const authMiddleware = require('./middlewares/auth');
const foodController = require('./controllers/food');
const userController = require('./controllers/user');

router.post('/food', foodController.addFood);
router.get('/food', foodController.findFood);

router.post('/login', userController.login);
router.post('/register', userController.register);

router.post('/user/log', authMiddleware, userController.addUserLog);
router.get('/user/log', authMiddleware, userController.getAllLogs);
router.get('/user/current', authMiddleware, userController.getCurrentInfo);

module.exports = router;