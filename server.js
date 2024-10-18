const http = require('http');
const instance = http.createServer(function(req , res ){
    if(req.url === '/bharat'){
        res.end("welcome to backend");
    }else{
        res.end('hello world');
    }
});
instance.listen(8080);