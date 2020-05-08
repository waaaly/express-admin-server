const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Model = mongoose.model.bind(mongoose)
const ObjecetId = Schema.Types.ObjectId

//创建用户模式
const userSchema = Schema({
	id:ObjecetId,
	name:{
		type:String,
		unique:true,//唯一索引，不能重名
		minlength:[4,'最小长度为4位'],
		maxlength:[8,'最大长度为8位'],
		trim:true,//去除头尾空格,
		required:[true,'error msg'],
		message:'error'
	},
	role:{
		type:String,
		enum:['管理员','普通用户'],
		required:true,
	},
	pwd:{
		type:String,
		minLength:[4,'最小长度为4位'],
		maxLength:[8,'最大长度为8位'],
		required:true,
	},
	signinTime:{
		type:Date,
		default:Date.now(),
	},
	loginTime:{
		type:Date,
	},
	location:{
		type:String,
		default:'广东广州'
	}
})

const User = Model('User',userSchema)

module.exports={
	User
}