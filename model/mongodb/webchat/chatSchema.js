const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Model = mongoose.model.bind(mongoose)
const ObjecetId = Schema.Types.ObjectId

//聊天模式
const chatSchema = new Schema({
	room : { type: Schema.Types.ObjectId, ref: 'Room' },
	nickname: String,
	message: String,
	created_date: { type: Date, default: Date.now },
})

module.exports = {
	chatSchema
}