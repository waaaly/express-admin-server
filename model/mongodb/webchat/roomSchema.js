const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Model = mongoose.model.bind(mongoose)
const ObjecetId = Schema.Types.ObjectId

//房间模式
var roomSchema = new Schema({
  room_name: String,
  created_date: { type: Date, default: Date.now },
});

module.exports = {
	roomSchema
}