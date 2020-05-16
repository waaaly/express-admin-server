const {Article} = require('../../model/mongodb/index.js')

const articleController = {
	createArticle(req,res){
		const body =JSON.parse(req.body.json) ;	
		Article.create(body,(err,doc)=>{
			// console.log(doc)
			res.json(doc)
		})
	},
	findByArticleId(req,res){
		const query = req.query;
		console.log(query)
		Article.findOneAndUpdate(
			{articleId:query.id},
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