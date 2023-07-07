import React, { useEffect, useState } from "react";
import { ENV_URL } from "../services/AppUrl";

const NetworkDetector = () => {
  const [isConnected, setIsConnected] = useState(false);
  const checkNetworkConnection = () => {
    const connection = navigator.onLine ? "online" : "offline";
    if (connection === "online") {
      const checkServer = setInterval(() => {
        fetch(ENV_URL, {
          mode: "no-cors",
        })
          .then(() => {
            setIsConnected(false);
            clearInterval(checkServer);
          })
          .catch(() => {
            setIsConnected(true);
            clearInterval(checkServer);
          });
      }, 1000);
    }
  };

  useEffect(() => {
    checkNetworkConnection();
    window.addEventListener("online", checkNetworkConnection);
    window.addEventListener("offline", checkNetworkConnection);
    return () => {
      window.removeEventListener("online", checkNetworkConnection);
      window.removeEventListener("offline", checkNetworkConnection);
    };
  }, []);

  return (
    <>
      {isConnected && (
        <div
          style={{
            width: "100%",
            background: "red",
            color: "#fff",
            padding: '10px',
            textAlign: "center",

          }}
        >
          Bad Connection
        </div>
      )}
    </>
  );
};

export default NetworkDetector;
