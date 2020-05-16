var express = require('express');
var router = express.Router();
const articleController = require('../controllers/blog/Article.js')

router.post('/createArticle',articleController.createArticle)
router.get('/findByArticleId',articleController.findByArticleId)
router.get('/findArticle',articleController.findArticle)


module.exports = router