import { DialogModalModel } from "../../../../../../dialogModal/model/DialogModalModel";

export interface Attributes {
    name:string;
    displayName: string;
    type: 'number' | 'dateTime' | 'text';
    validations:any[];
    encrypted?:boolean;
    currency?:boolean;
    audited?: boolean;
    activityLog?:boolean;
    mappedAsLOV?:boolean;
    mappedAsREF?: boolean;
    related?:boolean;
    modified?:boolean;
    attributeId?: string;
    defaultValue?: any;
}

export class EntityModel {
    entityName:string;
    entityId:string;
    type:string;
    translate:boolean;
    audited:boolean;
    resyncByProcess:boolean;
    attributes: any[];
    compositeKeys: any[];
    eachCompositeKey: any;
    persistenceRules: any;
    dialogModalModel:DialogModalModel;

    constructor(entityId:string, entityName:string, type:string) {
        this.entityId = entityId;
        this.entityName = entityName;
        this.type = type;
        this.audited = false;
        this.translate = false;
        this.resyncByProcess = false;
        this.attributes = [];
        this.compositeKeys = [];   // {attributes: ['Process', 'Data'], message: "hello"}
        this.eachCompositeKey = {};
        this.dialogModalModel = new DialogModalModel();
    }

}

export interface EntityModelProps {
    entityModel: EntityModel;
}