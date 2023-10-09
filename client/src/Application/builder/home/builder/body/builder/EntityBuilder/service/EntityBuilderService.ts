import { setSidebarLoaded } from "../../../../../../../../redux/entityBuilder/entityBuilderSlice";
import { APIServices } from "../../../../../../../../services/APIServices";
import { getAllEntityUrl } from "../../../../../../../../services/URLService";
import { EntityModel } from "../builder/entity/model/EntityModel";
import { EntityBuilderModel } from "../model/EntityBuilderModel";

export const getAllEntities = async (
  entityBuilderModel: EntityBuilderModel
) => {
  let url = getAllEntityUrl();
  APIServices.getData("GET", url, {})
    .then((res: any) => {
      console.log(res);
      entityBuilderModel.allEntities =
        arrangeInAlphabeticalOrder(res.data) ?? [];
      entityBuilderModel.currentEntities = entityBuilderModel.allEntities;
      entityBuilderModel.dispatch(setSidebarLoaded(true)); //{type: '', payload: true}
    })
    .catch((err: any) => console.log(err));
};

const arrangeInAlphabeticalOrder = (data: any[]) => {
  return data.sort((a: any, b: any) => {
    if (a["entityName"] < b["entityName"]) return -1;
    if (a["entityName"] > b["entityName"]) return 1;
    return 0;
  });
};

export const createEntityModelFor = (entity: any) => {
  const entityModel: EntityModel = new EntityModel(
    entity["entityId"],
    entity["entityName"],
    entity["type"]
  );
  entityModel.audited = entity["audited"];
  entityModel.translate = entity["translate"];
  entityModel.resyncByProcess = entity["resyncByProcess"];
  entityModel.attributes = entity["attributes"];
  entityModel.persistenceRules = entity["persistenceRules"];

  return entityModel;
};


export const isAttributeNameUnique = (attributeName:string, persistenceRules:any) => {
    return (persistenceRules["uniqueKeys"].find((_uk:any)=>_uk["attributeName"] === attributeName))?"Yes": "";
}

export const isAttributeNamePrimaryKey = (attributeName:string, persistenceRules:any) => {
    return (persistenceRules["primaryKeys"].find((_pk:any)=>_pk["attributeName"] === attributeName))?"pk": "";
}

export const isAttributeNameForeignKey = (attributeName:string, persistenceRules:any) => {
    return (persistenceRules["foreignKeys"].find((_fk:any)=>_fk["attributeName"] === attributeName))?"fk": "";
}