const { model, Schema } = require('mongoose');

const foodSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  servingSize: {
    type: String,
    required: true
  },
  calories: {
    type: Number,
    required: true
  },
  fats: {
    type: Number,
    required: true
  },
  protein: {
    type: Number,
    required: true
  },
  carbs: {
    type: Number,
    required: true
  },
  sugar: {
    type: Number,
    required: true
  },
})

const Food = model('Food', foodSchema);

module.exports = Food;