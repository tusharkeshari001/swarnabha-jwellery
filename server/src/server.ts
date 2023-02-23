const http = require("http");

// console.log("Hello World!");
const hostname = '127.0.0.1';
const port = 3005;
const server = http.createServer((req: any, res: any) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");
});

server.listen(port, hostname, ()=>{
    console.log('Hello world')
})
