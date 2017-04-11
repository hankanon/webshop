var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

/*数据库和session的操作*/
var mongoose= require('./module/connect');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);

/*arttemplate模板*/
var template = require('art-template');


var index = require('./routes/index');
var detail = require('./routes/detail');
var users = require('./routes/users');
var productlist = require('./routes/productlist');
var shopcar = require('./routes/shopcar');

var app = express();
/*设置session*/
app.use(session({
  secret: "what do you want to do?", //secret的值建议使用128个随机字符串
  cookie: {maxAge: 60 * 1000 * 60 * 24 * 14}, //过期时间
  resave: false, // 即使 session 没有被修改，也保存 session 值，默认为 true
  saveUninitialized: true,
  store: new MongoStore({
    mongooseConnection: mongoose.connection //使用已有的数据库连接
  })
}));


// view engine setup
/*设置arttemplate模板引擎*/
app.set('views', path.join(__dirname, 'views'));
template.config('base', '');
template.config('extname', '.html');
app.engine('.html', template.__express);
app.set('view engine', 'html');


// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/detail', detail);
app.use('/product', productlist);
app.use('/shop', shopcar);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
