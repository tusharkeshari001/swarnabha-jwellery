import React from "react";
import { HomePageModel, HomePageModelProps } from "../model/HomePageModel";
// import { socket } from "../../../../sockjs-client/socket";
import "../style/HomePageStyle.css";
import { buildNavigation } from "../builder/navigation/controller/navigationController";
import { buildHeader } from "../builder/header/controller/headerController";
import { buildBody } from "../builder/body/controller/bodyController";
// socket.connect();

export const buildHomePageComponent = (homePageModel: HomePageModel) => {
  return <HomePage homePageModel={homePageModel} />;
};

const HomePage = (props: HomePageModelProps) => {
  const homePageModel = props.homePageModel;
  // socket.emit("data", "Hello guys this is socket.io calling from homepage");

  return (
    <div className="root">
      <div className="navigation">{buildNavigation(homePageModel.navigationModel)}</div>
      <div className="main">
        <div className="header">{buildHeader(homePageModel.headerModel)}</div>
        <div className="body">{buildBody(homePageModel.bodyModel)}</div>
      </div>
    </div>
  );
};

// const socket = io("http://cdn.jsdelivr.net/sockjs/1.0.1/sockjs.min.js");
// // server-side
// io.on("connection", (socket) => {
//   console.log(socket.id); // x8WIv7-mJelg7on_ALbx
// });

// client-side
// socket.on("connect", () => {
//   console.log(socket.id); // x8WIv7-mJelg7on_ALbx
// });

// socket.on("disconnect", () => {
//   console.log(socket.id); // undefined
// });
