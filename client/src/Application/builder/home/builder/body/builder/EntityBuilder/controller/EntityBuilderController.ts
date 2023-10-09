import { EntityBuilderModel } from "../model/EntityBuilderModel";
import { buildEntityBuilderController } from "../ui/EntityBuilder";

export const buildEntityBuilder = (entityBuilderModel:EntityBuilderModel) => {
    return buildEntityBuilderController(entityBuilderModel);
}