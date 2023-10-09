import React, { useEffect, useState } from 'react'
import { BodyModel, BodyModelProps } from '../model/bodyModel'
import { StateManager } from '../../../../../../Global/State/GlobalState'
import { setBodyContent } from '../builder/contentBuilder'
import { arrayToObject } from '../../../../../../Global/services/GlobalServices'
import { SystemConstant } from '../../../../../../constant/SystemConstant'

export const buildBodyComponent = (bodyModel: BodyModel) => {
    return <BodyContent bodyModel={bodyModel}/>
}

const BodyContent = (props: BodyModelProps) => {
  const bodyModel = props.bodyModel;
  bodyModel.state = arrayToObject(useState(false));
  useEffect(()=>{
    StateManager.addStateToHolder(SystemConstant.BODY_STATE, bodyModel.state);
    bodyModel.type = 'EntityBuilder';
    // bodyModel.content
    bodyModel.state.setContentLoaded(true);
  },[])
  if(!bodyModel.state.isContentLoaded) {
    return <>Loader</>
  }else {
    return <>{bodyModel.content ?? setBodyContent(bodyModel)}</>
  }
}


