const mongoose = require('mongoose')
const Model = mongoose.model.bind(mongoose)
//引入模式
const { userAdminSchema } = require('./admin/userSchema.js') 
const { chatSchema } = require('./webchat/chatSchema.js') 
const { roomSchema } = require('./webchat/roomSchema.js') 
const { articleSchema } = require('./blog/articleSchema.js') 
//生成模型
const UserAdmin = Model('UserAdmin',userAdminSchema)
const Chat = Model('Chat',chatSchema)
const Room = Model('Room',roomSchema)
const Article = Model('Article',articleSchema)
//导出模型
module.exports={
	UserAdmin,
	Chat,
	Room,
	Article
}