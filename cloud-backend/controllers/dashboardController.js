const Transaction = require('../models/Transaction');
const User = require('../models/User');

exports.getDashboardData = async (req, res) => {
  try {
    const userId = req.user.id;

    // Fetch user details
    const user = await User.findById(userId).select('name email');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Mock account balance calculation
    const accountBalance = 2543.75; // Replace with actual logic

    // Fetch last 5 transactions
    const lastTransactions = await Transaction.find({ userId })
      .sort({ date: -1 })
      .limit(5);

    // Mock analytics data
    const analytics = [
      { date: '2024-11-01', amount: -200 },
      { date: '2024-11-05', amount: 1500 },
      { date: '2024-11-10', amount: -100 },
      { date: '2024-11-15', amount: 300 },
    ];

    res.json({
      personalDetails: {
        name: user.name,
        email: user.email,
        accountNumber: '123456789', // Replace with actual account number if available
      },
      accountBalance,
      lastTransactions,
      analytics,
    });
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
