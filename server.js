var express = require('express'),
    app = express(),
    path = require('path');
    server = require('http').createServer(app),
    io = require('socket.io')(server),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    port = process.env.PORT || 4000;
    require('./socketManager')(io)


// port connection
server.listen(port, function(){
    console.log('Listening on port ' + port);
});

// connect to database
mongoose.connect('mongodb://admin:admin123@ds129050.mlab.com:29050/react-chat',{ useNewUrlParser: true }, (err)=> {
    if (err){
        console.log(err);
    }else {
        console.log('Connected to Database')
    }
})

// middleware
mongoose.Promise = global.Promise;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// routes
app.use('/chats', require('./routes/chats'));
app.use('/', require('./routes/index'));
app.use('/', require('./routes/rooms'));