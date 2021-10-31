console.log("Hello World");
const http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('<h1>Hello World! - h1</h1>'); //write a response to the client
  res.write('<h2>Hello World! - h2</h2>'); //write a response to the client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080