const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Sequence = require('./sequence')

const articleSchema = Schema({
	articleId:{
		type:Number,
		index:{unique:true}
	},
	title:String,
	description:String,
	content:String,
	image:String,
	tags:[String],
	monthDate:Number,
	dayDate:Number,
	viewNum:{
		type:Number,
		default:0,
	},
	likeNum:{
		type:Number,
		default:0,
	},
	collectNum:{
		type:Number,
		default:0,
	},
	commetnNum:{
		type:Number,
		default:0,
	},
	createDate:{
		type:Date,
		default: Date.now()
	},
	modifyDate:{
		type:Date,
	}
})

//利用中间件pre 实现新增时，文章id自增长
articleSchema.pre('save', function(next){
	console.log(this)
	if(this.isNew){
		Sequence.increment('Article',(err,res)=>{
			if(err) throw err;
			this.articleId = res.value.next;
			next()
		})
	}else{
		next()
	}
}) 

// //利用中间件post 用户查询访问时 viewNum自增
// articleSchema.pre('findOne', function(next){
// 	console.log('findone')
// 	console.log(this)
// 	// Sequence.increment('Article',(err,res)=>{
// 	// 	if(err) throw err;
// 	// 	this.viewNum += 1;
// 	// 	next()
// 	// })
// 	this.viewNum += 1;
// 	next()
// })

module.exports = {articleSchema}