const express = require('express');
const router = express.Router();
const foodController = require('./controllers/food');

router.post('/food', foodController.addFood);
router.get('/food', foodController.findFood)

module.exports = router;