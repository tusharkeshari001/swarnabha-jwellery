import http from 'http';
import app from './app';
import * as sockjs from 'sockjs';

// const hostname = '127.0.0.1';
const PORT = 3005;
const server = http.createServer(app);


const echo = sockjs.createServer({ sockjs_url: 'http://cdn.jsdelivr.net/sockjs/1.0.1/sockjs.min.js' });
echo.on('connection', function(conn:any) {
  conn.on('data', function(message:any) {
    conn.write(message);
    console.log(message);
  });
  conn.on('close', function() {
    console.log('connection is closed...')
  });
});

echo.installHandlers(server, {prefix:'/echo'});

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
