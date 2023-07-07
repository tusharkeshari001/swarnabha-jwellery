import React from 'react'
import { HomePageModel, HomePageModelProps } from '../model/HomePageModel'

export const buildHomePageComponent = (homePageModel: HomePageModel) => {
    return <HomePage homePageModel={homePageModel}/>
}

const HomePage = (props: HomePageModelProps) => {
  return (
    <div>HomePage</div>
  )
}