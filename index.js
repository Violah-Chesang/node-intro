//requre is a method used to import libraries. It returns an object
let http = require('http');

//create a simple server
const server = http.createServer((req, resp) => {
    resp.write('<h1> Hello from the server!</h1>');//When a new reuest hits the server, display the response on the browser
    console.log('Request received');//this is executed when the ip and port numbers are entered in the server.
});
 //start the server
let PORT = 7000;
let IP = '127.0.0.1';
server.listen(PORT, IP, () => {
    console.log('The server has started!')
});
