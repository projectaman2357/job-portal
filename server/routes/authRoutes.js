const express = require('express');
const { registerCandidate } = require('../controllers/authController');

const router = express.Router();

// Register candidate route
router.post('/register', registerCandidate);

module.exports = router;
