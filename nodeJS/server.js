var a = 12;
var b = 20;
var c = a + b;
var http = require('http')
http.createServer((req,res) => {

    res.writeHead(200,{'content-type':'text/html'});
    res.write("A Value is </br>"+a );
    res.write("b Value is </br>"+b);
    res.write("c Value is </br>"+c);
    res.end("Bye </br>");
    
}).listen(3000);
console.log("Server started on http://127.0.0.1:3000");