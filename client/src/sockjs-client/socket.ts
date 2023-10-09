import { io } from 'socket.io-client';

// "undefined" means the URL will be computed from the `window.location` object
const URL:string = process.env.NODE_ENV === 'production' ? window.location.href : 'http://localhost:3005';
console.log('this is url testing :: ',process.env.NODE_ENV)
export const socket = io(URL);

// export const socket = io(URL, {
//     autoConnect: false
//   });