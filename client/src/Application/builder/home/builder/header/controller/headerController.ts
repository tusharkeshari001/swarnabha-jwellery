import { StateManager } from "../../../../../../Global/State/GlobalState"
import { buildDashboard } from "../../body/builder/Dashboard/controller/DashboardController"
import { DashboardModel } from "../../body/builder/Dashboard/model/DashboardModel"
import { buildEntityBuilder } from "../../body/builder/EntityBuilder/controller/EntityBuilderController"
import { EntityBuilderModel } from "../../body/builder/EntityBuilder/model/EntityBuilderModel"
import { getBodyModel } from "../../body/controller/bodyController"
import { HeaderModel } from "../model/headerModel"
import { buildHeaderComponent } from "../ui/Header"


export const buildHeader = (headerModel: HeaderModel) => {
  return buildHeaderComponent(headerModel)
}

export const handleHome = () => {
  const bodyState = StateManager.getStateToHolder('body-state'); 
  bodyState.setContentLoaded(false);
  setTimeout(()=>{
    getBodyModel().type = 'Dashboard';
    const dashboardModel: DashboardModel = new DashboardModel();
    getBodyModel().content = buildDashboard(dashboardModel);
    bodyState.setContentLoaded(true);
  },1000);
}

export const handleEntityBuilder = () => {
  const bodyState = StateManager.getStateToHolder('body-state'); 
  bodyState.setContentLoaded(false);
  setTimeout(()=>{
    getBodyModel().type = 'EntityBuilder';
    const entityBuilderModel: EntityBuilderModel = new EntityBuilderModel();
    getBodyModel().content = buildEntityBuilder(entityBuilderModel);
    bodyState.setContentLoaded(true);
  },1000);
}

export const handleEntityBuilderMain = () => {
  
}

export const handleAbout = () => {
  const bodyState = StateManager.getStateToHolder('body-state'); 
  bodyState.setContentLoaded(false);
  getBodyModel().type = 'Report';
  bodyState.setContentLoaded(true);
}