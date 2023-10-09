import { BodyModel } from "../builder/body/model/bodyModel";
import { HeaderModel } from "../builder/header/model/headerModel";
import { NavigationModel } from "../builder/navigation/model/navigationModel";

export class HomePageModel {
    navigationModel: NavigationModel;
    headerModel: HeaderModel;
    bodyModel: BodyModel;
    constructor () {
        this.navigationModel = new NavigationModel();
        this.headerModel = new HeaderModel();
        this.bodyModel = new BodyModel();
    }
}

export interface HomePageModelProps {
    homePageModel:HomePageModel;
}