const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const debtSchema = new Schema({
  debtName: { type: String, required: true },
  amount: { type: Number, required: true },
  interestrate: { type: Number, required: true },
  compounding: { type: String, required: true },
  minimumpayment: { type: Number, required: true },
  alternateamount: { type: Number, required: false }
});

const Debt = mongoose.model('Debt', debtSchema);

module.exports = Debt;
