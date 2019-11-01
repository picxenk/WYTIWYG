var http = require('http');
var url = require('url');
var path = require('path');
var fs = require('fs');
const { exec } = require('child_process');

var root = __dirname + "/public";

var server = http.createServer(handleRequest);
server.listen(8080);

console.log('Server started on port 8080');

function handleRequest(req, res) {
  var pathname = req.url;
  if (pathname == '/') {
    pathname = '/index.html';
  }
  
  var ext = path.extname(pathname);

  var typeExt = {
    '.html': 'text/html',
    '.js':   'text/javascript',
    '.css':  'text/css'
  };

  var contentType = typeExt[ext] || 'text/plain';

  fs.readFile(root + pathname,
    function (err, data) {
      if (err) {
        res.writeHead(500);
        return res.end('Error loading ' + pathname);
      }
      res.writeHead(200,{ 'Content-Type': contentType });
      res.end(data);
    }
  );
}


var io = require('socket.io').listen(server);

io.sockets.on('connection',
  function (socket) {
  
    console.log("We have a new client: " + socket.id);
  
    socket.on('print',
      function(data) {
        // console.log("Received: 'mouse' " + data.x + " " + data.y);
      
        // Send it to all other clients
        // socket.broadcast.emit('mouse', data);
        
        // This is a way to send to everyone including sender
        io.sockets.emit('message', "printing");
        exec('python printFontLine.py '+data.fontSize+' \''+data.bits+'\'', (err, stdout, stderr) => {
          if (err) {
            //some err occurred
            console.error(err)
          } else {
           // the *entire* stdout and stderr (buffered)
            io.sockets.emit('message', "done");
           // console.log(`stdout: ${stdout}`);
           // console.log(`stderr: ${stderr}`);
          }
        });

      }
    );
    
    socket.on('disconnect', function() {
      console.log("Client has disconnected");
    });
  }
);
