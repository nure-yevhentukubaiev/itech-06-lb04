var app = require('express')();
var http = require('http').Server(app);
var sio = require('socket.io')(http);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/about', function (req, res) {
  res.send('About');
});


sio.on('connection', function (socket) {
  socket.on('send message', function (msg) {
    sio.emit('receive message', msg);
  });
});

http.listen(3000, function () {
  console.log('listening on *:3000');
});
