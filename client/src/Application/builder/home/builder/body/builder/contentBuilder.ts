import { BodyModel } from "../model/bodyModel";
import { buildDashboard } from "./Dashboard/controller/DashboardController";
import { DashboardModel } from "./Dashboard/model/DashboardModel";
import { buildEntityBuilder } from "./EntityBuilder/controller/EntityBuilderController";
import { EntityBuilderModel } from "./EntityBuilder/model/EntityBuilderModel";

export const setBodyContent = (bodyModel: BodyModel) => {
    switch(bodyModel.type){
        case 'Dashboard':
            const dashboardModel: DashboardModel = new DashboardModel();
            bodyModel.content = buildDashboard(dashboardModel);
            break;
        case 'EntityBuilder':
            const entityBuilderModel: EntityBuilderModel = new EntityBuilderModel();
            bodyModel.content = buildEntityBuilder(entityBuilderModel);
            break;
        case 'Report':
            break;
    }
    return bodyModel.content;
}