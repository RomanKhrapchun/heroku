var http = require('http');

var server = http.createServer(function (req, res) {
    console.log('??????? ??????? ??????');

    res.writeHead(200, {
        'Content-Type': 'text/plain; charset=UTF-8'
    });
    res.end('Hello world!');
});


server.listen(1991, "127.0.0.1", function () {
    console.log('C????? ???????? ?? ??????? http://127.0.0.1:1991/');
});