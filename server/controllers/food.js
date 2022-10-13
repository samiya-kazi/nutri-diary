const Food = require('../models/food');

async function addFood (req, res) {
  try {
    const foodItem = req.body;
    await Food.validate(foodItem, ['name', 'servingSize', 'calories', 'fats', 'protein', 'carbs', 'sugar']);

    const result = await Food.create(foodItem);

    res.status(201).send(result);

  } catch (error) {
    res.status(500).send('Server error \n ' + error.message);
    console.error(error.message);
  }
}


async function findFood (req, res) {
  try {
    const search = req.query.search;
    const regex = new RegExp(search, 'i');

    const result = await Food.find({name: regex});

    res.status(200).send(result);

  } catch (error) {
    res.status(500).send('Server error \n ' + error.message);
    console.error(error.message);
  }
}

module.exports = { addFood, findFood }