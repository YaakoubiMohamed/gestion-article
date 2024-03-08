const express = require('express');
const router =  express.Router();

const articleController = require('../controllers/articleController');


router.get('/articles', articleController.getArticles); //list all articles
router.get('/article/:id',  articleController.getArticleById);// get one article by id
router.post('/article', articleController.createArticle);// create a new article
router.put('/article/:id', articleController.updateArticle); // update an existing article
router.delete('/article/:id', articleController.deleteArticle); // delete an article by its id

module.exports= router;