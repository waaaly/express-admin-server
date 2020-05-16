const socketio = require('socket.io')
var io 
var user_num = 0
var user = {}
var userList = []

exports.listen = function(server){
	io = socketio(server)
	io.on('connection', function (socket) {
	  console.log('User connected');
	  socket.on('disconnect', function() {
	    console.log('User disconnected');
	  });
	  socket.on('save-message', function (data) {
	    console.log(data);
	    io.emit('new-message', { message: data });
	  });
	});
}
/*
exports.listen = function(server){
	io = socketio(server)
	io.on('connection',(socket=>{
		console.log('客户端已连接',socket.id )
		var addedUser = false;
		//响应用户emit消息join
		socket.on('join',(userName =>{
			console.log('server join' +userName)
			if(addedUser) return 
			//将用户信息存储在socket会话中
			socket.userName = userName;
			++user_num;
			user = {
				name:userName,
				id:socket.id
			}
			userList.push(user)
			console.log('join'+'当前人数'+user_num)
			addedUser = true;
			//通知用户连接成功
			socket.emit('login',{
				userName: socket.userName,
				userNum: user_num
			})
			//广播所有用户
			socket.broadcast.emit('user_joined',{
				userName: socket.userName,
				userList,
				msg: "欢迎 "+socket.userName + " 进入聊天室",
				type: "BROADCAST",
				userNum: user_num
			})
		}))

		//用户断开socket
		socket.on('disconnect',(()=>{	
			console.log('客户端已断开socket',socket.id)
			if(user_num){
				--user_num;		
				userList.splice(userList.findIndex(item => item.id === socket.id), 1)
				console.log('disconnect'+'当前人数'+user_num,socket.id)
				socket.broadcast.emit('user_lfet',{
					userName:socket.userName,
					userList,
					msg:socket.userName+'离开了聊天室',
					type:"BROADCAST",
					userNum:user_num,
				})
			}	
		}))
		//监听用户发送消息，广播给所有用户
		socket.on('send_msg',((data)=>{
			if(user_num){
				socket.broadcast.emit('bro_msg',{
					userName:socket.userName,
					data,
					type:"BROADCAST",
				})
			}
		}))
	}))
	
}
*/