import http from 'http';
import app from './app';

const hostname = '127.0.0.1';
const PORT = 3005;
const server = http.createServer(app);

server.listen(PORT, ()=>{
  console.log(`Server running on port ${PORT}`)
})




// const http = require("http");

// const hostname = '127.0.0.1';
// const port = 3005;
// const server = http.createServer((req: any, res: any) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.end("Hello World");
// });

// server.listen(port, hostname, ()=>{
//     console.log('Hello world')
// })
