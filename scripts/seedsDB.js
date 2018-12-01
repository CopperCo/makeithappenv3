const mongoose = require('mongoose');
const db = require('../models');

// This file empties the collection and inserts the items below
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/makeithappen');

const incomeSeed = [
  {
    id: 1,
    Name: 'Take Home Pay',
    Amount: '$5000',
    Frequency: 'monthly',
    Date: '12-31-18'
  },
  {
    id: 2,
    Name: 'Uber Pay',
    Amount: '150',
    Frequency: 'Wk',
    Date: '12-01-18'
  }
];

const expensesSeed = [
  {
    id: 1,
    Name: 'Bell Canda',
    Amount: '$250',
    Frequency: 'monthly',
    Date: '10-20-18'
  },
  {
    id: 2,
    Name: 'Rent',
    Amount: '1550',
    Frequency: 'Monthly',
    Date: '11-01-18'
  }
];

db.Income.remove({})
  .then(() => db.Income.collection.insertMany(incomeSeed))
  .then(data => {
    console.log(data.result.n + ' records inserted!');
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
db.Expense.remove({})
  .then(() => db.Income.collection.insertMany(expensesSeed))


// Dream


const dreamSeed = [
  {
    name: 'Dream1',
    targetDate: '2019-02-02',

    estimatedAmont: '2000'
    // priority: "High"
  },
  {
    name: 'Dream2',
    targetDate: '2019-02-02',

    estimatedAmont: '4000'
    // priority: "High"
  }
];

db.Dream.remove({})
  .then(() => db.Dream.collection.insertMany(dreamSeed))

  .then(data => {
    console.log(data.result.n + ' records inserted!');
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
