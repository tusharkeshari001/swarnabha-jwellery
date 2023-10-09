import { BodyModel } from "../model/bodyModel";
import { buildBodyComponent } from "../ui/Body";

let currentBodyModel:BodyModel;

export const buildBody = (bodyModel: BodyModel) => {
    currentBodyModel = bodyModel;
    return buildBodyComponent(bodyModel);
}

export const getBodyModel = () => {
    return currentBodyModel;
}