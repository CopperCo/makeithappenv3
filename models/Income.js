const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const incomeSchema = Schema({
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
  amountPerPay: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  }
});

const Income = mongoose.model('Income', incomeSchema);
module.exports = Income;
