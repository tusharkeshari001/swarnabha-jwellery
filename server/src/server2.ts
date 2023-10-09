import http from "http";
import { Socket, Server } from "socket.io";
import app from "./app";
// import * as sockjs from "sockjs";

// const HOSTNAME = '127.0.0.1';
const PORT = 3005;
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3001',
    methods: ['GET', 'POST']
  }
})

io.on("connection", (socket:any) => {
  console.log("user has connected with socket id : ",socket.id);
})

server.listen(PORT, ()=>{
  console.log(`Server running on port ${PORT}`)
})

// server.on("connection", (socket) => {
//   socket.on('new-user-attached', (name:string)=>{
//     console.log("name : ", name);
//   })
// });

//----------------------------------------------------------------------

// const hostname = '127.0.0.1';
// const PORT = 3005;
// const server = http.createServer(app);

// const echo = sockjs.createServer({
//   sockjs_url: "http://cdn.jsdelivr.net/sockjs/1.0.1/sockjs.min.js",
// });

// echo.on("connection", function (conn: any) {
//   conn.on("data", function (message: any) {
//     // conn.write(message);
//     console.log(message);
//   });
//   conn.on("close", function () {
//     console.log("connection is closed...");
//   });
// });

// echo.installHandlers(server, { prefix: "/echo" });

//--------------------------------------------------------------------------


