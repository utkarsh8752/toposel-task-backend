const router = require('express').Router();
const auth = require('../middleware/auth');
const {
  getPublicContent,
  upsertAnnouncement,
  upsertHero,
  replaceIcons,
} = require('../controllers/contentController');

router.get('/public', getPublicContent);
router.put('/announcement', auth, upsertAnnouncement);
router.put('/hero', auth, upsertHero);
router.put('/icons', auth, replaceIcons);

module.exports = router;
