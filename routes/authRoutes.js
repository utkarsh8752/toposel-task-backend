const router = require('express').Router();
const { login, bootstrapAdmin } = require('../controllers/authController');

router.post('/login', login);
router.post('/bootstrap', bootstrapAdmin); // dev helper

module.exports = router;
