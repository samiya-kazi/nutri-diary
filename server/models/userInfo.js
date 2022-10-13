const { model, Schema } = require('mongoose');

const userInfoSchema = new Schema({
  userId: {
    type: String,
    required: true
  },
  height: {
    type: Number,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  calGoal: {
    type: Number,
    required: true
  },
  weightGoal: {
    type: Number,
    required: true
  }
});

const UserInfo = model('UserInfo', userInfoSchema);

module.exports = UserInfo;