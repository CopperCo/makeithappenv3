const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist"
);

const dreamSeed = [
  {
    name: "Dream1",
    targetDate: "2019-02-02",

    estimatedAmont: "2000"
    // priority: "High"
  },
  {
    name: "Dream2",
    targetDate: "2019-02-02",

    estimatedAmont: "4000"
    // priority: "High"
  }
];

db.Dream.remove({})
  .then(() => db.Dream.collection.insertMany(dreamSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
