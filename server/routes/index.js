const router = require('express').Router();
const authenticate = require('../middleware/auth');
const user = require('../controllers/user');
const article = require('../controllers/article');

router.post('/users/register', user.register);
router.post('/users/login', user.login);
router.get('/users', authenticate, user.findOne);

router.post('/articles', authenticate, article.insert);
router.get('/articles', authenticate, article.findAll);
router.delete('/articles', authenticate, article.delete);

module.exports = router;
