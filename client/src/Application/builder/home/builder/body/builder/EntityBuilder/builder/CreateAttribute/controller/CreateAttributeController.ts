import { CreateAttributeModel } from "../model/CreateAttributeModel";
import { buildCreateAttributeComponent } from "../ui/CreateAttribute"

export const buildCreateAttribute = (createAttributeModel: CreateAttributeModel) => {
    return buildCreateAttributeComponent(createAttributeModel);
}