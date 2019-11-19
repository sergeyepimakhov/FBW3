const http = require('http');
const path = require('./path');
//const fs = require('./fileSystem');

const hostname = '127.0.0.1';
const port = 3000;

/*
const server = http.createServer((req, res) => {
    path.getFileName();
    path.getDirName();
    path.getFileExt();
    fs.readFileSync();
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});
*/

/*
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
*/

const fs = require('fs');
// const data = fs.readFileSync('index.html'); // the server will wait until it's read

/*
try {
    fs.writeFileSync('sync.txt', 'anni', { mode: 0o755 });
  } catch(err) {
    // An error occurred
    console.error(err);
  }
  */

console.log('before writing');
fs.writeFileSync('aboutme.html', 'about me page');
console.log('after writing');
console.log('one another log');

/*
http.createServer(function (req, res) {
    //Open a file on the server and return its content:
    //fs.readFile('index.html', function(err, data) {
    //fs.readFile('file.json', function (err, data) {
    //    if (err) throw err; // it's important

        //res.writeHead(200, { 'Content-Type': 'text/html' });
        res.writeHead(200, { 'Content-Type': 'application/JSON' }); // here is the trick
        // res.write(data);
        //res.write('{"data": "test"}');
        console.log(JSON.parse('{"data": "test"}'));
        res.write(JSON.stringify({"data": "test"}));
        return res.end();
    //});
}).listen(3000);*/