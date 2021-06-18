const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write('Hello World');
        res.end();
    }

    if(req.url === '/api/course'){
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }


    if(req.url === '/api/classes'){
        res.write(JSON.stringify(["Architecting","Security","Analytics"]));
        res.end();
    }


    if(req.url === '/api/time'){
        res.write(JSON.stringify(["10.00 AM","1.00 PM","5.00 PM"]));
        res.end();
    }

});

//server.on(()=>console.log('message'));
// server.on('connection',(socket)=>{
// console.log(socket);
// });

server.listen('80');
console.log('Listening on port 80');
