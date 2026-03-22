const Announcement = require('../models/Announcement');
const Hero = require('../models/Hero');
const Icon = require('../models/Icon');

exports.getPublicContent = async (_req, res) => {
  try {
    const [announcement] = await Announcement.find().sort({ updatedAt: -1 }).limit(1);
    const [hero] = await Hero.find().sort({ updatedAt: -1 }).limit(1);
    const icons = await Icon.find().sort({ createdAt: 1 });
    return res.json({ announcement, hero, icons });
  } catch (err) {
    return res.status(500).json({ message: 'Failed to fetch content', error: err.message });
  }
};

exports.upsertAnnouncement = async (req, res) => {
  try {
    const payload = req.body || {};
    const announcement = await Announcement.findOneAndUpdate({}, payload, {
      new: true,
      upsert: true,
      setDefaultsOnInsert: true,
    });
    return res.json(announcement);
  } catch (err) {
    return res.status(500).json({ message: 'Failed to save announcement', error: err.message });
  }
};

exports.upsertHero = async (req, res) => {
  try {
    const payload = req.body || {};
    const hero = await Hero.findOneAndUpdate({}, payload, {
      new: true,
      upsert: true,
      setDefaultsOnInsert: true,
    });
    return res.json(hero);
  } catch (err) {
    return res.status(500).json({ message: 'Failed to save hero', error: err.message });
  }
};

exports.replaceIcons = async (req, res) => {
  try {
    const icons = Array.isArray(req.body) ? req.body : [];
    await Icon.deleteMany({});
    const created = await Icon.insertMany(icons);
    return res.json(created);
  } catch (err) {
    return res.status(500).json({ message: 'Failed to save icons', error: err.message });
  }
};
