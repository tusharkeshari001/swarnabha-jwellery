import { EntityModel } from "../model/EntityModel";
import { buildEntityUiComponent } from "../ui/EntityUi";

export const buildEntityUi = (entityModel: EntityModel) => {
    entityModel.attributes = entityModel.attributes.map((data)=>{
        // console.log(data['attributeId'])
        data['id'] = data['attributeId'];   // needed for Table DnD 
        return data;
      })
    return buildEntityUiComponent(entityModel);
}
