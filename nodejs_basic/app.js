const http = require('http');  //it will pick http.js file

// Call like below 1:
// function rqListener(req, res){

// }
// http.createServer(rqListener);

// Call like below 2:
// http.createServer(function(req, res){

// });

// Call like below 3:
const server = http.createServer((req,res)=> {
    console.log(req.url, req.method, req.headers);

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1><i>Hello, Everyone!!!!!</i></h1><p>This is my first program paragraph content</p></body>');
    res.write('</html>');
});

server.listen(3000);