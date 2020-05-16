const {Chat} = require('../../model/mongodb/index.js')


const chatController = {
	allChatsByRoomId(req,res){
		console.log(req.body)
		Chat.find({ room: req.body.roomid }, function (err, products) {
		  if (err) return res.json(err);
		  res.json(products);
		});
	},
	chatById(req,res){
		console.log(req.body)
		Chat.findOne({_id:req.body.id}, function (err, post) {
		  if (err) return res.json(err);
		  res.json(post);
		});
	},
	saveChat(req,res){
		Chat.create(req.body,(err,post)=>{
			if(err) returnres.json(err)
			res.json(post)
		})
	},
	
}
module.exports = chatController