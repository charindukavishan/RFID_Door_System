var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
const routers = require('./routes/router.index')

// router directing files
app.use('/api', routers);

io.on('connection', (socket) => {
  console.log('connected')
});

http.listen(8080, () => {
  console.log('listening on :8080');
});
