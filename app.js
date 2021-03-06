var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var mongoose = require('mongoose');
const option = {
	 useNewUrlParser: true,
	 useUnifiedTopology: true 
}
//连接mogondb
mongoose.connect(`mongodb://localhost:27017/vue-blog`,
	option,(err,db)=>{
		if(err){
			console.error(err)
		}else{
			console.log(`已成功连上数据库：${db.name}`)
		}
})
const cors = require('cors')


var indexRouter = require('./routes/index');
var adminApiRouter = require('./routes/adminApi');
var chatApiRouter = require('./routes/chatApi');
var blogApiRouter = require('./routes/blogApi');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



//允许跨域访问
app.use(cors());


//设置跨域请求
// app.all('*', function(req, res, next) {
//   // CORS headers
//   res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//   // Set custom headers for CORS
//   res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
//   if (req.method == 'OPTIONS') {
//     res.status(200).end();
//   } else {
//     next();
//   }
// });

app.use('/', indexRouter);
app.use('/api/admin',adminApiRouter);
app.use('/api/webchat',chatApiRouter);
app.use('/api/blog',blogApiRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
