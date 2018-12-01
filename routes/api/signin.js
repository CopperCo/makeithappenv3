const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../../models/User');
const UserSession = require('../../models/UserSession');

router.post('/account/signup', (req, res, next) => {
  const { body } = req;
  let { firstName, lastName, email, password } = body;

  if (!firstName) {
    return res.send({
      success: false,
      message: 'First name cannot be blank'
    });
  }

  if (!lastName) {
    return res.send({
      success: false,
      message: 'Last name cannot be blank'
    });
  }
  if (!email) {
    return res.send({
      success: false,
      message: 'E-mail cannot be blank'
    });
  }

  if (!password) {
    return res.send({
      success: false,
      message: 'Password cannot be blank'
    });
  }

  email = email.toLowerCase();
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
      newUser.firstName = firstName;
      newUser.lastName = lastName;
      newUser.email = email;
      newUser.password = newUser.generateHash(password);
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

router.post('/account/signin', (req, res, next) => {
  const { body } = req;
  let { username, email, password } = body;

  if (!email) {
    return res.send({
      success: false,
      message: 'Email cannot be blank'
    });
  }

  if (!password) {
    return res.send({
      success: false,
      message: 'Password cannot be blank'
    });
  }

  email = email.toLowerCase();

  User.find(
    {
      email: email
    },
    (err, users) => {
      if (err) {
        return res.send({
          success: false,
          message: 'Error: server error'
        });
      }
      if (users.length != 1) {
        return res.send({
          success: false,
          message: 'Error: Invalid'
        });
      }

      const user = users[0];
      if (!user.validPassword(password)) {
        return res.send({
          success: false,
          message: 'Error: Invalid'
        });
      }

      //Otherwise correct user
      const userSession = new UserSession();
      userSession.userId = user._id;
      userSession.save((err, doc) => {
        if (err) {
          return res.send({
            success: false,
            message: 'Error: server error'
          });
        }

        return res.send({
          success: true,
          message: 'Valid sign in',
          token: doc._id
        });
      });
    }
  );
});

router.get('/account/verify', (req, res, next) => {
  const { query } = req;
  const { token } = query;

  UserSession.find(
    {
      _id: token,
      isDeleted: false
    },
    (err, sessions) => {
      if (err) {
        return res.send({
          success: false,
          message: 'Error: Server error'
        });
      }

      if (sessions.length != 1) {
        return res.send({
          success: false,
          message: 'Error: Invalid'
        });
      } else {
        return res.send({
          success: true,
          message: 'Good'
        });
      }
    }
  );
});

module.exports = router;
