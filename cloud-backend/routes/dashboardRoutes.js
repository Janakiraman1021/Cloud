const express = require('express');
const { getDashboardData } = require('../controllers/dashboardController');
const authMiddleware = require('../middleware/authMiddleware');
const Transaction = require('../models/Transaction');

const router = express.Router();

router.get('/', authMiddleware, getDashboardData);

module.exports = router;
