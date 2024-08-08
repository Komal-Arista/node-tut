// var colors = require('colors');

// console.log("test purpose1111 test 123".magenta);

const http = require('http');
const data = require('./data');

http.createServer((req,resp) => {
    resp.writeHead(200, {'Content-Type':'application\json'});
    resp.write(JSON.stringify(data));
    resp.end();
}).listen(5000);
