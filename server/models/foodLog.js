const { model, Schema } = require('mongoose');

const foodLogSchema = new Schema({
  userId: {
    type: String,
    required: true
  },
  foodId: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  meal: {
    type: String,
    required: true
  },
  servings: {
    type: Number,
    required: true
  },
  totalCalories: {
    type: Number,
    required: true
  },
  totalFats: {
    type: Number,
    required: true
  },
  totalProtein: {
    type: Number,
    required: true
  },
  totalCarbs: {
    type: Number,
    required: true
  },
  totalSugar: {
    type: Number,
    required: true
  },
})

const FoodLog = model('FoodLog', foodLogSchema);

module.exports = FoodLog;