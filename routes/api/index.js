const router = require('express').Router();
const dreamRoutes = require('./dreams');

// Book routes
router.use('/dreams', dreamRoutes);

module.exports = router;
