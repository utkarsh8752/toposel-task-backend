require('dotenv').config();
const app = require('./app');
const connectDB = require('./config/db');
const bootstrapAdmin = require('./utils/bootstrapAdmin');

const PORT = process.env.PORT || 4000;

const start = async () => {
  await connectDB();
  await bootstrapAdmin();
  app.listen(PORT, () => console.log(`API listening on http://localhost:${PORT}`));
};

start();
