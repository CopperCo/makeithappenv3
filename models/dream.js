const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dreamSchema = new Schema({
  name: { type: String, required: true },
  targetDate: { type: Date, required: true },
  estimatedAmount: { type: Number, required: true },
  minMonthlySaving: { type: Number }
});

const Dream = mongoose.model("Dream", dreamSchema);

module.exports = Dream;
