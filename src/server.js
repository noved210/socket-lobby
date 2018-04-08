var app = require('express')();
var https = require('https').Server(app);
var io = require('socket.io')(https);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
});

https.listen(3000, function(){
  console.log('listening on *:3000');
});
