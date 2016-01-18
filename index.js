var express = require("express");
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

http.listen(3000, function(){
  console.log('Example app listening on port 3000!');
});
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendfile('public/index.html');
});

io.on('connection', function(socket){
  console.log('a user has connected');
});
