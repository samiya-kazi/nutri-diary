const express = require('express');
const router = express.Router();
const authMiddleware = require('./middlewares/auth');
const userController = require('./controllers/user');
const foodController = require('./controllers/food');
const foodLogController = require('./controllers/foodLog');

router.post('/food', foodController.addFood);
router.get('/food', foodController.findFood);

router.post('/login', userController.login);
router.post('/register', userController.register);

router.post('/user/log', authMiddleware, userController.addUserLog);
router.get('/user/log', authMiddleware, userController.getAllLogs);
router.get('/user/current', authMiddleware, userController.getCurrentInfo);

router.get('/diary/:date', authMiddleware, foodLogController.getMealsForDay)
router.post('/diary', authMiddleware, foodLogController.addFoodToMeal);
router.delete('/diary/:id', authMiddleware, foodLogController.deleteFoodFromMeal);
router.put('/diary', authMiddleware, foodLogController.updateFoodInMeal);

module.exports = router;