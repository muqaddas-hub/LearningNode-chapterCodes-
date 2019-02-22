# Hello.js Code Explained

``` Node

var http = require('http');
http.createServer(function(request,response){
    response.writeHead(200,{'Coontent-Type':'text/plain'});
    response.end('Hello World\n');
}).listen(8124)

console.log('Server running at http://127.0.0.1:8124')

```

This code basically creates a web server application that displays a web page with the words "Hello World".

## Code Terminologies

* **console.log()** function is used to print the result on the command line.
* **http(HTTP)** is an external module which is used to deal with the server.
* **require()** function incorporate the external module by assigning them to local variables.
* **wrietHead()** is used to write the header of the response for different status codes.
* **end()** method both sends the content of the response to the client and signals to the server that the response (header and content) has been sent completely.
* In **listen()**  we are specifying the port on which we are listening the response. you can give multiple parameter (see related links for further study).

## Related Links

* [Brief Intro to HTTP module by w3schools](https://www.w3schools.com/nodejs/nodejs_http.asp)
* [Node.js v11.10.0 HTTP module Documentation](https://nodejs.org/api/http.html)