var express = require('express');
var router = express.Router();
const chatController = require('../controllers/webchat/Chat.js')
const roomController = require('../controllers/webchat/Room.js')

router.get('/chatbyroomid',chatController.allChatsByRoomId)
router.get('/chatbyid',chatController.chatById)
router.post('/chat',chatController.saveChat)

router.get('/roomlist',roomController.allRooms)
router.get('/roombyid',roomController.roomById)
router.post('/room',roomController.createRoom)

module.exports = router