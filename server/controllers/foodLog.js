const FoodLog = require('../models/foodLog');
const Food = require('../models/food');

async function addFoodToMeal (req, res) {
  try {
    const { foodId, meal, servings } = req.body;
    const userId = req.user._id;
    const food = await Food.findById(foodId);

    const date = new Date(req.body.date).toISOString().split('T')[0]

    const foodName = food.name;
    const totalCalories = Math.ceil(food.calories * servings);
    const totalFats = (food.fats * servings).toFixed(1);
    const totalProtein = (food.protein * servings).toFixed(1);
    const totalCarbs = (food.carbs * servings).toFixed(1);
    const totalSugar = (food.sugar * servings).toFixed(1);

    await FoodLog.validate({userId, foodId, foodName, date, meal, servings, totalCalories, totalCarbs, totalFats, totalProtein, totalSugar}, 
      ['userId', 'foodId', 'foodName', 'date', 'meal', 'servings', 'totalCalories', 'totalCarbs', 'totalFats', 'totalProtein', 'totalSugar']);

    const result = await FoodLog.create({userId, foodId, foodName, date, meal, servings, totalCalories, totalCarbs, totalFats, totalProtein, totalSugar});

    res.status(201).send(result);

  } catch (error) {
    res.status(500).send('Server error \n ' + error.message);
    console.error(error.message);   
  }
}


async function getMealsForDay (req, res) {
  try {
    const date = new Date(req.params.date).toISOString().split('T')[0];
    const userId = req.user._id;

    const result = await FoodLog.find({userId, date});

    res.status(201).send(result);

  } catch (error) {
    res.status(500).send('Server error \n ' + error.message);
    console.error(error.message);   
  }
}


module.exports = { addFoodToMeal, getMealsForDay }