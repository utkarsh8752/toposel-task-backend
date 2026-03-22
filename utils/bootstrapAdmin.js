const bcrypt = require('bcrypt');
const User = require('../models/User');

/**
 * Ensure at least one admin account exists.
 * Uses SEED_ADMIN_EMAIL / SEED_ADMIN_PASSWORD or defaults.
 */
const bootstrapAdmin = async () => {
  const email = process.env.SEED_ADMIN_EMAIL || 'admin@demo.com';
  const password = process.env.SEED_ADMIN_PASSWORD || 'admin123';

  const existing = await User.findOne({ email });
  if (existing) return existing;

  const passwordHash = await bcrypt.hash(password, 10);
  const user = await User.create({ email, passwordHash, role: 'admin' });
  console.log(`Bootstrap admin created: ${email} / ${password}`);
  return user;
};

module.exports = bootstrapAdmin;
