require('dotenv').config({ path: '../.env' });
const bcrypt = require('bcrypt');
const connectDB = require('../config/db');
const Announcement = require('../models/Announcement');
const Hero = require('../models/Hero');
const Icon = require('../models/Icon');
const Product = require('../models/Product');
const User = require('../models/User');
const { products, hero, announcement, icons } = require('../utils/seedData');

const run = async () => {
  await connectDB();
  await Promise.all([
    Announcement.deleteMany({}),
    Hero.deleteMany({}),
    Icon.deleteMany({}),
    Product.deleteMany({}),
  ]);

  await Announcement.create(announcement);
  await Hero.create(hero);
  await Icon.insertMany(icons);
  await Product.insertMany(products);

  const adminEmail = process.env.SEED_ADMIN_EMAIL || 'admin@demo.com';
  const adminPass = process.env.SEED_ADMIN_PASSWORD || 'admin123';
  const passwordHash = await bcrypt.hash(adminPass, 10);
  await User.deleteMany({});
  await User.create({ email: adminEmail, passwordHash, role: 'admin' });

  console.log(`Seeded data. Admin -> email: ${adminEmail}, password: ${adminPass}`);
  process.exit(0);
};

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
