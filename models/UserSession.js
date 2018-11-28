const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const UserSessionSchema = Schema({
  userId: {
    type: Number,
    default: -1
  },
  timestamp: {
    type: Date,
    default: Date.now()
  },
  isDelete: {
    type: Boolean,
    default: false
  }
});

const UserSession = mongoose.model('UserSession', UserSessionSchema);
module.exports = UserSession;
