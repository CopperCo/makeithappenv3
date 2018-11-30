const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./api/signin');

// const loginRoutes = require('./api/signin');
// const profileRoutes = require('./api/profile');
// const moneyRoutes = require('./api/money');

// API Routes
router.use('/api', apiRoutes);
// router.use('/api/signin', loginRoutes);
// router.use('/api/profile', profileRoutes);
// router.use('/api/money', moneyRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router;
