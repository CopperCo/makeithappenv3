const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const budgetSchema = Schema({
  name: {
    type: String,
    required: true
  },
  frequency: {
    type: String,
    required: true
  },
  nextPayment: {
    type: Date,
    required: true
  },
  totalIncome: {
    type: Number,
    required: true
  }
});

const Budget = mongoose.model('Budget', budgetSchema);
module.exports = Budget;
