const express = require('express');
const router = express.Router();
const { healthChecker } = require('./apiController');


// Default Rotes
router.get('/api/v1/', healthChecker);


module.exports = router;