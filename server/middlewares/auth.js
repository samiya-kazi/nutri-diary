const jwt = require('jsonwebtoken');
const User = require('../models/user.js');
const secret = require('../config.js').JWT_SECRET || 'test-secret';

const authMiddleware = async (req, res, next) => {
   try {

      const token = req.get('Authorization').split(' ')[1];
      const { id } = jwt.verify(token, secret);
      const user = await User.findById(id);

      if(user) {
        req.user = user;
        next();
      } else {
        res.status(403);
        res.send('Not authorized');
      }
   } catch(error) {
      console.log(error);
      res.status(401).send('Error with authentication.');
   }
};

module.exports = authMiddleware;