const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

//Create Schema
const userSchema = Schema({
  // _id: Schema.Types.ObjectId,
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  totalIncome: {
    type: Number
  },
  isDeleted: {
    type: Boolean,
    default: false
  },
  income: [{ type: Schema.Types.ObjectId, ref: 'Income' }],
  expense: [{ type: Schema.Types.ObjectId, ref: 'Expense' }],
  dreams: [{ type: Schema.Types.ObjectId, ref: 'Dreams' }]
});

userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// userSchema.methods.genSalt(saltRounds, function(err, salt) {
//   return bcrypt.hash(password, salt, function(err, hash) {

//   })
// })

userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model('User', userSchema);
module.exports = User;
