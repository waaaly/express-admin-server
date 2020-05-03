const {User} = require('../model/index.js')

function  response(code,msg,userInfo={}) {
	return {
		msg:msg,
		userInfo:userInfo,
		code:code
	}
} 
const userController = {
	//用户注册
	signin(req,res){
		//获取请求体携带的body参数
		const body = req.body;
		//根据user模型创建新的user document
		const userDoc = new User(body);
		//得到数据之后先校验，通过校验才保存
		userDoc.validate().then(()=>{		
			//执行save语句将新用户保存到数据库
			userDoc.save((err,user)=>{
				if(err){
					console.log(err)
					if(err.code==11000){
						res.json(response(-1,"该用户名已被注册！",user))
					}
				}else{
					console.log(user)
					res.json(response(1,"注册成功，请您登录！",user))
				}
			})
		}).catch(err=>{
			console.log(err.message)
		})
		
	},
	//用户登录
	login(req,res){
		const body = req.query;
		console.log(body)
		User.findOne({name:body.name},(err,user)=>{
			console.log(err,user)
			if(!user){
				res.json(response(0,"该用户尚未注册！"))
			}else{
				if(user.pwd === body.pwd){
					User.findByIdAndUpdate(user._id,{$set:{loginTime:Date.now()}},(err,data)=>{
						res.json(response(1,"登录成功！",data))
					})
				}else{
					res.json(response(-1,"密码错误，请重新确认密码！"))
				}
			}		
		})
	}
}

module.exports = userController