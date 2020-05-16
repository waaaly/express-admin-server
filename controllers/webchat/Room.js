const {Room} = require('../../model/mongodb/index.js')


const roomController = {
	allRooms(req,res){
		Room.find(function (err, products) {
		  if (err) return res.json(err);
		  res.json(products);
		});
	},
	roomById(req,res){
		console.log(req.body)
		Room.findOne(req.body.id, function (err, post) {
		  if (err) return res.json(err);
		  res.json(post);
		});
	},
	createRoom(req,res){
		Room.create(req.body, function (err, post) {
		  if (err) return res.json(err);
		  res.json(post);
		});
	}
}

module.exports = roomController