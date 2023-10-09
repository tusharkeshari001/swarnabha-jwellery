import http from "http";
import app from "./app";
// import Stomp, { Client } from "stompjs";
import WebSocket from "ws";

const PORT: number = 3005;
const server = http.createServer(app);
const clients :any= {};

export const wss = new WebSocket.Server({ server });

wss.on('connection',(con)=>{
  clients[Math.random()] = con;
  console.log('connected')
  if(con.readyState === WebSocket.OPEN){
    con.send(' Sending notification to test websocket');
    con.addEventListener('message', () => {})
  }
  
}).on('close',()=>{
  console.log('closed')
})

// export function connectClient(stompClient: Client) {
//   stompClient.connect({}, (frame: any) => {
//     console.log("stomp client connected");
    
//       // console.log("before subscription...", stompClient.subscriptions);
//       stompClient.subscribe("/user", (message: any) => {
//         console.log("message : ", message);
//       }, {});
//       console.log("after subscription...", stompClient.subscriptions);

//   }, (error:any) => {
//     console.log('error :: ',error);
//   });
// }

// export function disconnectClient(stompClient: any) {
//   stompClient.disconnect(() => {
//     console.log("stomp server disconnected");
//   });
// }

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  // let stompClient = Stomp.over(wss);
  
  // connectClient(stompClient);
});

// console.log(wss);
// let stompClient = Stomp.overTCP('localhost', PORT);
// console.log(stompClient);
// disconnectClient(stompClient);


// stompClient.connect({login: 'tushar', passcode: 'pass123'},(frame:any)=>{
//   console.log('frame ::',frame);
//   stompClient.subscribe(`/users`,(data:any)=>{
//     console.log('data ::',data);
//     // wss.
//     stompClient.send('hello from server to all user for id ',1212)
//   })
// })

// let stompClient = Stomp.overWS('ws://localhost:3005/stomp');

// export const ws = new WebSocket('ws://localhost:3001/');

// let stompClient = Stomp.over(ws);
// export let stompClient = Stomp.over(wss);
