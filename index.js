//
// -----
// references: 
// https://stackoverflow.com/questions/23977705/change-html-text-based-on-node-js-server-settimeout
// -----

'use strict';

var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

// Set the port to listen to
const port = 8087;
server.listen(port);

// Print out our IP (works on raspberry pi only!)
//var os = require( 'os' );
//var networkInterfaces = os.networkInterfaces();
//console.log('http://' + networkInterfaces['wlan0'][0]['address'] + port);


// Send our webpage
var dir = __dirname; // currnet work dir
app.get('/', function(req, res) {
    res.sendFile(dir + '/index.html');
});

function SendTime() {
    var cur_time = new Date();
    var time_str = cur_time.toLocaleString();
    io.emit('time', time_str);
}

// Sent time update every second
setInterval(SendTime, 1000);

// Send at connection
io.on('connection', function(socket) {
    socket.emit('time', '---Starting up---');
});
