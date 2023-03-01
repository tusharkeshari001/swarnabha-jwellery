import React from "react";
import "./App.css";
import NetworkDetector from "./NetworkDetector/NetworkDetector";
import { appUrl } from "./services/URLService";

function App() {
  return (
    <>
      <NetworkDetector />
    </>
  );
}

export default App;

// function App() {
//   const [message, setMessage] = React.useState('');

//   React.useEffect(() => {
//     fetch(appUrl).then((response:any)=>{
//       return response.json();
//     }).then((data:any)=>{
//       // console.log(data);
//       setMessage(data.message);
//     }).catch((error:any)=>{
//       console.log('getting error while fetching data',error);
//     })
//     return () => {
//     }
//   }, [])

//   return (
//     <div className="App">
//       {navigator.onLine?'online':'offline'}
//       <br></br>
//       {message}
//     </div>
//   );
// }