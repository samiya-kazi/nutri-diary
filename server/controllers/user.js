const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const secret = process.env.JWT_SECRET;

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


const register = async (req, res) => {
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


module.exports = { login, register }