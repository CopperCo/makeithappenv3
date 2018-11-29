const User = require('../models/User');

module.exports = app => {
  app.post('/api/account/signup', (req, res, next) => {
    const { body } = req;
    const { username, email, password } = body;

    if (!username) {
      res.end({
        success: false,
        message: 'Error, username cannot be blank'
      });
    }

    if (!email) {
      res.end({
        success: false,
        message: 'Error, email cannot be blank'
      });
    }

    if (!password) {
      res.end({
        success: false,
        message: 'Error, password cannot be blank'
      });
    }

    email = email.toLowerCase();

    User.find(
      {
        email: email
      },
      (err, previousUsers) => {
        if (err) {
          res.end({
            success: false,
            message: 'Error: Server error'
          });
        } else if (previousUsers.length > 0) {
          res.end({
            success: false,
            message: 'Error: Account already exist.'
          });
          res.end();
        }

        const newUser = new User();
        newUser.username = username;
        newUser.password = newUser.generateHash(password);
        newUser.email = email;
        newUser.save((err, user) => {
          if (err) {
            res.end({
              success: false,
              message: 'Error: Server error'
            });
          }
          res.end({
            success: true,
            message: 'Signed up'
          });
        });
      }
    );
  });
};
