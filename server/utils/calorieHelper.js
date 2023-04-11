const goals = ['maintain', 'gain', 'lose'];
const genders = ['male', 'female'];


function calcBasalCalories (gender, height, weight, age) {

  const parsedHeight = parseFloat(height);
  const parsedWeight = parseFloat(weight);

  const validate = (genders.indexOf(gender) !== -1 && height && weight && typeof age === 'number')

  if (validate) {

    //BMR Formula:
    //Men: BMR = 88.362 + (13.397 x weight in kg) + (4.799 x height in cm) – (5.677 x age in years)
    //Women: BMR = 447.593 + (9.247 x weight in kg) + (3.098 x height in cm) – (4.330 x age in years)

    if (gender === 'male') {
      const calories = Math.ceil(88.362 + (13.397 * parsedWeight) + (4.799 * parsedHeight) - (5.677 * age));
      return calories;
    } else {
      const calories = Math.ceil(447.593 + (9.247 * parsedWeight) + (3.098 * parsedHeight) - (4.330 * age));
      return calories;
    }

  } else {
    throw new Error('Invalid params to calculate basal calories burned.');
  }
}


function calcCalorieGoal (basal, goal) {
  const validate = (typeof basal === 'number' && goals.indexOf(goal) !== -1);
  if (validate) {
    switch (goal) {
      case 'gain':
        return basal + 500;
      case 'lose':
        return basal - 500;
      default:
        return basal;
    }
  } else {
    throw new Error('Invalid params to calculate calorie goals.');
  }
}


module.exports = { calcBasalCalories, calcCalorieGoal}