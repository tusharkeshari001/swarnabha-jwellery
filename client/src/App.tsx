import React from "react";
// import { redirect } from "react-router-dom";
import "./App.css";
// import BellcurveChart from "./charts/BellcurveChart/ui/BellcurveChart";
import NetworkDetector from "./NetworkDetector/NetworkDetector";
import approutes from "./Routes/approutes";
import AbhaWebSocket from "./WebSocket/ui/AbhaWebSocket";
import { redirect } from "react-router-dom";

function App() {
  // const [isUserLoggedIn, setIsUserLoggedIn] = React.useState<Boolean | null>(
  //   null
  // );
  let isUserLoggedIn = null;
  
  if (isUserLoggedIn !== null) {
    isUserLoggedIn ? redirect('/') : redirect('/login');
    return <>{approutes()}</>
  } else {
    return (
      <>
        <NetworkDetector />
        {/* <p style={{textAlign:'center'}}>Welcome Page</p> */}
        {/* <BellcurveChart /> */}
        <AbhaWebSocket />
        {approutes()}
      </>
    );
  }
}

export default App;
