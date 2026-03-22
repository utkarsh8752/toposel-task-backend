const mongoose = require('mongoose');

const iconSchema = new mongoose.Schema(
  {
    label: { type: String, required: true },
    iconUrl: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Icon', iconSchema);
