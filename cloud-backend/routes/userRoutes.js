
const express = require('express');
const protect = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/profile', protect, (req, res) => {
  res.json({ message: 'User profile' });
});

module.exports = router;
