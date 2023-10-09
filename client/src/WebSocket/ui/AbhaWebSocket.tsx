import Stomp from "stompjs";
import React from "react";
// import SockJS from "sockjs-client";
// import { getWSSubsctriptionURL } from "../service/AbhaWebSocketSevice";
// import { WEBSOCKET_URL } from "../../services/URLService";

const AbhaWebSocket = () => {
  // let stompClient:any = null;
  // const location = useLocation();
  // const WS_URL = getWSSubsctriptionURL("1212");
  React.useEffect(() => {
    console.log("creation operation perform here");
    // let _SockJs = new SockJS(WEBSOCKET_URL);
    // const SC = Stomp.over(_SockJs);
    // const SC = Stomp.overWS('ws://localhost:3005/swarnabha-jwellery');
    const SC =  Stomp.client('ws://localhost:3005/swarnabha-jwellery' ,['ws','wss','http'])
    SC.connect({}, (frame:any) => {
      console.log('frame :: ',frame);
      // console.log('stompClient connected with backend');
      // SC.subscribe(WS_URL,(message: any) => {
      //   console.log("subscribed stompClient", message);
      //   // SC.send()
      // });
    }, (ex:any)=>{
      console.log(ex)
    });


    // SC.current = Stomp.overWS('ws://localhost:3005/stomp')
    // var thisheaders = {
    //   // Host:'websocket.com'
    //   // 'Content-Type': 'text/event-stream'
    // };
    // SC.current.connect({}, (params: any) => {
    //   // setConnected(true);
    //   console.log("params :: ", params);
    //   SC.current.subscribe(WS_URL, (message: any) => {
    //     console.log("subscribed stompClient", message);
    //   });
    // });
    return () => {
      console.log("deletion operation perform here");
    };
  }, []);

  return (
    <div>
      <div className="child" onClick={() => {}}>
        {/* ABHA JWELLERS */}
      </div>
    </div>
  );
};

export default AbhaWebSocket;
