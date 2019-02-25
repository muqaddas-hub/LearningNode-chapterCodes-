# helloWorldTweaked.js Code Explained

Modified the basic application to parse the incoming request to look for the query string. the name in the string is extracted and used to determine the type of the content returned. If you use _name = nurningbird_ as query, you'll get an image otherwise the name variable is set to _'world'_.

``` Node
var http = require('http');
var fs = require('fs')
```

**http** module is used to deal with servers.
**fs** is a File System module.

```Node
http.createServer(function(req,res){}).listen(8124)
```

It creates a server that listen on port 8124.

``` Node
var name = require('url').parse(req.url,true).query.name;
```

In above line we are chaining exported module properties. We are basically parsing the url to extract the query parameters.

`We can both import the module and use its functions in the same line.`

```Node
if(name === undefined) name = 'world';
```

Assigning the string contain _world_ if name is not defined in the query url.

```Node
if(name == 'burningbird'){
        var file = 'phoenix5a.jpg';
        fs.stat(file,function(err,stat){
            if(err){
                console.error(err);
                res.writeHead(200,{'content-Type' : 'text/plain'});
                res.end("Sorry, Burningbird isn't around right now \n");
            } else {
                var img = fs.readFileSync(file);
                res.contentType = 'image/jpg';
                res.contentLength = stat.size;
                res.end(img, 'binary')
            }
        });
    } else {
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end('Hello ' + name + '\n');
    }
```

- In the above lines of code run if name variabble is defined and it is equal to _burningbird_ the _if_ section will run.

- **fs.stat()** method not onl verifies that the file exists but also returns an object with the information about the file, including its size. This value is used in creating the content header.

- If the file doesn’t exist, the application handles the situation gracefully: it issues a friendly message that the bird has flown the coop, but also provides error information at the console, using the **console.error()** method this time:

```
{ [Error: ENOENT: no such file or directory, stat 'phoenix5a.png']
errno: -2,
code: 'ENOENT',
syscall: 'stat',
path: 'phoenix5a.png' }
```

- For reading the file we are using synchronous function, **readFileSync()**, rather than the asynchronous version which is **readFile()**. Node does support both, but using synchronous operations in a web request in Node is taboo.

`In this example we are not using _exception handling_, but you can use **try...catch** method with synchronous functions.`

- In the _else{}_ section we are simply sending string response containing _Hello World_
