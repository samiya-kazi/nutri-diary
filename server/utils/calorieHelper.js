const goals = ['maintain', 'gain', 'lose'];
const genders = ['male', 'female'];


function calcBasalCalories (gender, height, weight, age) {
  const validate = (genders.indexOf(gender) !== -1 && typeof height === 'number' && typeof weight === 'number' && typeof age === 'number')

  if (validate) {

    //BMR Formula:
    //Men: BMR = 88.362 + (13.397 x weight in kg) + (4.799 x height in cm) – (5.677 x age in years)
    //Women: BMR = 447.593 + (9.247 x weight in kg) + (3.098 x height in cm) – (4.330 x age in years)

    if (gender === 'male') {
      const calories = Math.ceil(88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age));
      return calories;
    } else {
      const calories = Math.ceil(447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age));
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