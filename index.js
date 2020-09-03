var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);


io.on('connection', (socket) => {
  console.log('connected')
});

http.listen(3000, () => {
  console.log('listening on :3000');
});