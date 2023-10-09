import React from 'react'
import { NavigationModel, NavigationModelProps } from '../model/navigationModel'

export const buildNavigationComponent = (navigationModel: NavigationModel) => {
  return <Navigation navigationModel={navigationModel} />
}

const Navigation = (props: NavigationModelProps) => {
  return (
    <></>
  )
}
