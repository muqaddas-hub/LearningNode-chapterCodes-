var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
    var name = require('url').parse(req.url,true).query.name;

    if(name === undefined) name = 'world';

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
}).listen(8124);

//for hello world response
console.log('Server running at http://127.0.0.1:8124')
console.log('Server running at http://127.0.0.1:8124/?name=burningbird')