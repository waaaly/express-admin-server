const socketio = require('socket.io')
var io 
var user_num = 0
exports.listen = function(server){
	io = socketio(server)
	io.on('connection',(socket=>{
		var addedUser = false;
		//响应用户emit消息join
		socket.on('join',(userName =>{
			if(addedUser) return 
			//将用户信息存储在socket会话中
			socket.userName = userName;
			++user_num;
			addedUser = true;
			//通知用户连接成功
			socket.emit('login',{
				userName: socket.userName,
				userNum: user_num
			})
			//广播所有用户
			socket.broadcast.emit('user_joined',{
				userName: socket.userName,
				msg: "欢迎 "+socket.userName + " 进入聊天室",
				type: "BROADCAST",
				userNum: user_num
			})
		}))
		//响应用户离开
		socket.on('disconnect',(()=>{
			if(user_num){
				--user_num;
			}
			socket.broadcast.emit('user_left',{
				userName:socket.userName,
				msg:socket.userName+'离开了聊天室',
				type:"BROADCAST",
				userNum:user_num,
			})
		}))
	}))
	
}