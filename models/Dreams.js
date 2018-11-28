const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const dreamSchema = Schema({
  name: {
    type: String,
    required: true
  },
  estimatedAmount: {
    type: Number,
    required: true
  },
  targetDate: {
    type: Date,
    required: true
  },
  minMonthlySavings: {
    type: Number,
    required: true
  }
});

const Dreams = mongoose.model('Dreams', dreamSchema);
module.exports = Dreams;
