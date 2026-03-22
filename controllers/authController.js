const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const issueToken = (user) => {
  const payload = { id: user._id, email: user.email, role: user.role };
  const secret = process.env.JWT_SECRET || 'devsecret';
  const expiresIn = process.env.JWT_EXPIRES_IN || '1d';
  return jwt.sign(payload, secret, { expiresIn });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ message: 'Email and password required' });

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

    const token = issueToken(user);
    return res.json({ token, user: { email: user.email, role: user.role } });
  } catch (err) {
    return res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// For quick bootstrap in dev only
exports.bootstrapAdmin = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ message: 'Email and password required' });

  try {
    const existing = await User.findOne({ email });
    if (existing) return res.json({ message: 'Admin exists' });

    const passwordHash = await bcrypt.hash(password, 10);
    const user = await User.create({ email, passwordHash, role: 'admin' });
    const token = issueToken(user);
    return res.status(201).json({ token, user: { email: user.email, role: user.role } });
  } catch (err) {
    return res.status(500).json({ message: 'Server error', error: err.message });
  }
};
