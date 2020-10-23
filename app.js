var createError = require('http-errors');
var express = require('express');
var bodyParser =require('body-parser');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var fs = require('fs');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var opn = require('opn');
const open = require('open');

// const { post } = require('./routes/index');
var app = express();
const http = require('http').Server(app)
var urlParser = bodyParser.urlencoded({extended:false});
// app.set('views', __dirname + '/views');
// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(path.join(__dirname, '')));
app.get('/',function(req,res){
  res.send("hello welcome to the hoem page of my web site")
  console.log('server starte at http:\\127.0.0.1:9000')
  // res.send('hello world')
  // res.sendFile(path.join(__dirname,'login.html'));
});
// app.post('/home',function(req,res){
//   // res.sendFile(path.join(__dirname,'index.html'));
//   console.log(req.body.passWrd)
  
// })

// app.get('/favicon.icoss',function(req,res) {
//   res.sendFile(path.join(__dirname,'index.html'));
//   console.log(__dirname)
//   var tmpUserid = req.query.user_id
//   var tmpPasWRd = req.query.passWrd
//   if (tmpUserid == 'vishnu'){
//     console.log("boss has arrived")
//     // post("https://aumsam.amrita.edu/aums/Jsp/Core_Common/index.jsp?task=off")
//   }
//   // console.log(req.body.fname)
//   // console.log(req.body.lastName)
// });
app.get('/home',function(req,res) {
  res.sendFile(path.join(__dirname,'index.html'));
  console.log(__dirname)
  var tmpUserid = req.query.user_id
  var tmpPasWRd = req.query.passWrd
  if (tmpUserid == 'vishnu'){
    console.log("boss has arrived")
    // post("https://aumsam.amrita.edu/aums/Jsp/Core_Common/index.jsp?task=off")
  }
  // console.log(req.body.fname)
  // console.log(req.body.lastName)
});
app.post('/home',urlParser, function(req,res){
  console.log(req.body)
  res.send("hello "+req.body.user_id)
  
  // open("https://aumsam.amrita.edu/cas/login?service=https%3A%2F%2Faumsam.amrita.edu%2Faums%2FJsp%2FCore_Common%2Findex.jsp")
  // console.log("this is to show that post is working fine")
  // res.send("this is to just show that the error was due to the html filr not loading")
  // res.sendFile(path.join(__dirname,'styledheets/login.html'));
});
app.get('/hello/:name',function(req,res){
  const name = req.params.name
  // res.sendFile('index.html');
  
  res.send("the name is "+name)
});
app.get('/home/aums',function(req,res){
  // res.sendFile(path.join(__dirname,'styleSheets/test.html'))
  opn("https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2F736x%2F15%2F26%2F62%2F152662373b8c743a65c1ae9f42b8f8a2.jpg&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F825636544170514839%2F&tbnid=h3H5-RmtWxU9MM&vet=12ahUKEwi8yrP218fsAhUq1HMBHUX6DVcQMygDegUIARC8AQ..i&docid=Jr7IM2PJuu82qM&w=570&h=835&itg=1&q=minion&hl=en-US&ved=2ahUKEwi8yrP218fsAhUq1HMBHUX6DVcQMygDegUIARC8AQ")
  console.log("test")
});
app.listen(8080,'192.168.43.185', () => {
  console.info('server started on port 8080');
});
// app.listen(9000,"192.168.43.1",'0.0.0.0');
// var port = 9000;
// http.listen(3000, '0.0.0.0',function(){
//   console.log("the server has started at  192.168.43.185:3000")
// })
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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
