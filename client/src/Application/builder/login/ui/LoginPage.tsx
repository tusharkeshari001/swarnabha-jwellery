import React from "react";
import { LoginPageModel, LoginPageModelProps } from "../model/LoginPageModel";

export const buildLoginPageComponent = (loginPageModel: LoginPageModel) => {
    return <LoginPage loginPageModel={loginPageModel}/>
}

const LoginPage = (props: LoginPageModelProps) => {
  return (
    <div style={{width:'50%', height:'50vh'}}>
      <input type="email" name="Enter Email" id="email-id" />
      <input type="password" name="password" id="pass" />
      <button>Login</button>
    </div>
  );
};

