import React from "react";
// import { redirect } from "react-router-dom";
import "./App.css";
import BellcurveChart from "./charts/BellcurveChart/ui/BellcurveChart";
import NetworkDetector from "./NetworkDetector/NetworkDetector";
import approutes from "./Routes/approutes";

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = React.useState<Boolean | null>(
    null
  );

  if (isUserLoggedIn !== null) {
    return isUserLoggedIn ? approutes() : <></>;
  } else {
    return (
      <>
        <NetworkDetector />
        {/* <p style={{textAlign:'center'}}>Welcome Page</p> */}
        {/* <BellcurveChart /> */}
        {approutes()}
      </>
    );
  }
}

export default App;
