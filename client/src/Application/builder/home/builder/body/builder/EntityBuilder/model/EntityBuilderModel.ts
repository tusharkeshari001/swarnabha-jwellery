// import { EntityModel } from "../builder/entity/model/EntityModel";

export class EntityBuilderModel {
    allEntities: any;
    currentEntities:any;
    // entityModel: EntityModel | null;
    content:any;
    dispatch:any;
    constructor() {
        // this.entityModel = null;
        this.content = null;
    }
    
}

export interface EntityBuilderModelProps {
    entityBuilderModel: EntityBuilderModel;
}