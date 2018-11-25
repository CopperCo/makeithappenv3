const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const debtSchema = new Schema({
  debtName: { type: String, required: true },
  amount: { type: Integer, required: true },
  interestrate: { type: Integer, required: true },
  compounding: { type: String, required: true },
  minimumpayment: { type: Integer, required: true },
  alternateamount: { type: Integer, required: false }
});

const Debt = mongoose.model('Debt', debtSchema);

module.exports = Debt;
