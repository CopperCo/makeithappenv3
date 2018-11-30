const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes');
const path = require('path');

const PORT = process.env.PORT || 3001;
const app = express();

// this is our MongoDB database
// const dbRoute =
//   'mongodb://' +
//   process.env.DB_USER +
//   ':' +
//   process.env.DB_PASS +
//   '@' +
//   process.env.DB_HOST;

// connects our back end code with the database
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost:27017/makeithappen',
  { useNewUrlParser: true }
);

let db = mongoose.connection;
db.once('open', () => console.log('connected to the database'));
// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// Define middleware here
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}
// Define API routes here
// require('./routes/signin')(app);
app.use(routes);
// app.use('/signin', signInRoute);
// Send every other request to the React app
// Define any API routes before this runs
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});
app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
