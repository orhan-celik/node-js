const http = require('http');

const server = http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.write('Merhaba Node JS sunucusu oluşturuldu.');
    res.end();
});

server.listen(3000);