const Article = require('../models/article')

exports.getArticles = async (req, res) =>{
    try{
        let articles= await Article.findAll();
        // console.log(articles);
        res.json(articles);
        
    }catch(err){
        console.error(err.message);
        res.status(500).send("Server error");
    }
}

exports.getArticleById = async (req, res) =>{
    const id = req.params.id;
    try{
        const article= await Article.findByPk(id);
        if(article) {
            res.json(article);
        } else{ 
            res.status(404).send({ message: "Not found"});
        }
    }catch(err){
        console.error(err.message);
        res.status(500).send("Server error");
    }
}


exports.createArticle = async (req, res) =>{
    try{
        const article = new Article.create(req.body);
        res.status(201).json(article);
    }  catch(err){
        console.error(err.message);
        res.status(500).json(err);
        }
}


exports.updateArticle = async (req, res) =>{
    const id  = req.params.id;
    try{
        const article = await Article.findByPk(id);
        if(article){
            await article.update(req.body);
            res.json(article);
        } else {
            return res.status(404).json({ message: 'NotFound'})
        }
        }  catch(err){
            console.log(err);
            res.status(500).json({ message: 'Internal Server Error' })
    }
}

exports.deleteArticle = async (req,res) =>{
    const id  = req.params.id;
    try{
        const article = await Article.findByPk(id);
        if(article){
            await article.destroy();
            res.json({message:"article supprime"})
        } else {
            return res.status(404).json({ message: 'NotFound'})
        }
        }  catch(err){
            console.log(err);
            res.status(500).json({ message: 'Internal Server Error' })
    }
}

