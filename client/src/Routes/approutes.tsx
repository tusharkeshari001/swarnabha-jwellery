import React, { lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LoginPageModel } from '../Application/builder/login/model/LoginPageModel'
import { buildLoginPage } from "../Application/builder/login/controller/LoginPageController";
import { buildHomePage } from '../Application/builder/home/controller/HomePageController';
import { HomePageModel } from '../Application/builder/home/model/HomePageModel';

const approutes = () => {
  const loginPageModel: LoginPageModel = new LoginPageModel();
  const homePageModel: HomePageModel = new HomePageModel();
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={buildHomePage(homePageModel)}/>
        <Route path='/login' element={buildLoginPage(loginPageModel)}/>
      </Routes>
    </BrowserRouter>
  )
}

export default approutes