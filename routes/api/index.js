const router = require('express').Router();
const budgetSetup = require('./budgetsetup');

router.use('/budgetsetup', budgetSetup);

const debtRoutes = require('./debt');

// Debt routes
router.use('/debt', debtRoutes);


module.exports = router;
