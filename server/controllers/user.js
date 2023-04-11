const User = require('../models/user');
const UserLog = require('../models/userLog');
const { calcBasalCalories, calcCalorieGoal } = require('../utils/calorieHelper');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secret = require('../config.js').JWT_SECRET || 'test-secret';

async function login (req, res) {
  try {
    const { email, password } = req.body;
    
    const user = await User.findOne({email});

    if(user) {
      if(bcrypt.compareSync(password, user.password)) {
        const token = jwt.sign({id: user._id}, secret, {expiresIn:'1h'});
        res.setHeader('Authorization', 'Bearer ' + token);
        res.status(200).send(user);
      } else {
        res.status(401).send('Invalid password.');
      }

    } else {
      res.status(400).send('User does not exist.');
    }  

  } catch (error) {
    res.status(500).send('Server error \n ' + error.message);
    console.error(error.message);
  }
}


async function register (req, res) {
  try {
    const { firstName, lastName, email, gender, age } = req.body;
    const pass = req.body.password;

    const salt = bcrypt.genSaltSync(10);
    const password = bcrypt.hashSync(pass, salt);

    const user = await User.findOne({email});

    if(!user) {
      const newUser = {email, password, firstName, lastName, gender, age};
      await User.validate(newUser, ['firstName', 'lastName', 'email', 'password', 'gender', 'age']);
      const result = await User.create(newUser);
      const token = jwt.sign({id: result._id}, secret, {expiresIn:'1h'});
      res.setHeader('Authorization', 'Bearer ' + token);
  
      res.status(201).send(result);
    } else {
      res.status(400).send('Account already exists.');
    }

  } catch (error) {
    res.status(500).send('Server error \n ' + error.message);
    console.error(error.message);
  }
};


async function addUserLog (req, res) {
  try {
    const { height, weight, weightGoal } = req.body;
    const userId = req.user._id;
    const { gender, age } = req.user;
    const date = new Date;

    const basalCal = calcBasalCalories(gender, height, weight, age);

    const goal = weightGoal > weight ? 'gain': weightGoal < weight ? 'lose' : 'maintain';

    const calGoal = calcCalorieGoal(basalCal, goal);

    await UserLog.validate({userId, height, weight, date, weightGoal, basalCal, calGoal}, ['userId', 'height', 'weight', 'date', 'weightGoal', 'basalCal', 'calGoal']);
    const result = await UserLog.create({userId, height, weight, date, weightGoal, basalCal, calGoal});

    res.status(201).send(result);

  } catch (error) {
    res.status(500).send('Server error \n ' + error.message);
    console.error(error.message);
  }
};


async function getCurrentInfo (req, res) {
  try {
    const userId = req.user._id;

    const result = await UserLog.find({userId}).sort({ date: -1 }).limit(1);
    
    res.status(200).send(result[0]);
  } catch (error) {
    res.status(500).send('Server error \n ' + error.message);
    console.error(error.message);    
  }
  
}


async function getAllLogs (req, res) {
  try {
    const userId = req.user._id;

    const result = await UserLog.find({userId});
    
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send('Server error \n ' + error.message);
    console.error(error.message);    
  }
  
}


module.exports = { login, register, addUserLog, getCurrentInfo, getAllLogs }