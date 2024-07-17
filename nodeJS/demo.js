var fs = require('fs');
var http = require('http');

http.createServer(function(req,res) {
    fs.readFile('demo.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end("bye");
    });
}).listen(3000);
console.log("Server is started on http://127.0.0.1:3000");