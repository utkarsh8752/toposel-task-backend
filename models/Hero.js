const mongoose = require('mongoose');

const heroSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    subtitle: { type: String, default: '' },
    ctaLabel: { type: String, default: '' },
    ctaHref: { type: String, default: '#' },
    backgroundImage: { type: String, default: '' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Hero', heroSchema);
