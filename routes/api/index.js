const router = require('express').Router();
const budgetSetup = require('./budgetsetup');

router.use('/budgetsetup', budgetSetup);
module.exports = router;
