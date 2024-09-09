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
    console.log(req);
});

server.listen(3000);