const {Article} = require('../../model/mongodb/index.js')

const articleController = {
	createArticle(req,res){
		const body = req.body;		
		Article.create(body,(err,doc)=>{
			// console.log(doc)
			res.json(doc)
		})
	},
	findByArticleId(req,res){
		const body = req.body;
		console.log(body)
		Article.findOneAndUpdate(
			{articleId:body.id},
			{$inc:{viewNum:1}},
			{new:true},
			(err,doc)=>{
				res.json(doc)
		})
	},
	findArticle(req,res){
		Article.find((err,doc)=>{
			res.json(doc)
		})
	}
}

module.exports = articleController