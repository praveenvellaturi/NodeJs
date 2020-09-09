var http = require('http');
var requestListner = function(req,res){
    if(req.url=='/register'){
        res.writeHead(200);
        res.end("<h1>Sai praneeth fanpage</h1><input type='text'/>")
    }
    else{
        res.writeHead(200)
        
         res.end("<h1>welcome</h1> <input type='text'/>")
    }
    };
    var server = http.createServer(requestListner);
    server.listen("3000")
