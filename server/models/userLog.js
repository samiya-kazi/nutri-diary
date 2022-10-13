const { model, Schema } = require('mongoose');

const userLogSchema = new Schema({
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
  weightGoal: {
    type: Number,
    required: true
  },
  basalCal: {
    type: Number,
    required: true
  },
  calGoal: {
    type: Number,
    required: true
  },
});

const UserLog = model('UserLog', userLogSchema);

module.exports = UserLog;