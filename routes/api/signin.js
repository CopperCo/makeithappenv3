const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../../models/User');
// let db = mongoose.connection;

// module.exports = app => {

router.post('/account/signup', (req, res, next) => {
  // let user = new User(req.body);

  // user
  //   .save()
  //   .then(user => {
  //     res.status(200).send(user);
  //   })
  //   .catch(err => {
  //     res.status(400).send(err);
  //   });
  // });

  const { body } = req;
  let { username, email, password } = body;

  if (!username) {
    return res.send({
      success: false,
      message: 'Error, username cannot be blank'
    });
  }

  if (!email) {
    return res.send({
      success: false,
      message: 'Error, email cannot be blank'
    });
  }

  if (!password) {
    return res.send({
      success: false,
      message: 'Error, password cannot be blank'
    });
  }

  console.log('here');

  email = email.toLowerCase();
  console.log(email);
  console.log(password);
  User.find(
    {
      email: email
    },
    (err, previousUsers) => {
      if (err) {
        console.log(err);
        return res.send({
          success: false,
          message: 'Error: Server error'
        });
      } else if (previousUsers.length > 0) {
        return res.send({
          success: false,
          message: 'Error: Account already exists.'
        });
      }

      const newUser = new User();
      newUser.username = username;
      newUser.password = newUser.generateHash(password);
      newUser.email = email;
      newUser.save((err, user) => {
        if (err) {
          console.log('err:', err);
          return res.send({
            success: false,
            message: 'Error: Server error'
          });
        }
        return res.send({
          success: true,
          message: 'Signed up'
        });
      });
    }
  );
});

module.exports = router;
