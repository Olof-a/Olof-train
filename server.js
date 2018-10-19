var net = require('net');
var server = new net.createServer();

var obj = new Object();
var i = 0;

server.on('connection',()=>{
    user.on('data',(data)=>{
        console.log('客户端：'+data);
    })
})
