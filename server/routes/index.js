const router = require('express').Router();
const authenticate = require('../middleware/auth');
const user = require('../controllers/user');

router.post('/users/register', user.register);
router.post('/users/login', user.login);
router.get('/users', authenticate, user.findOne);

module.exports = router;
