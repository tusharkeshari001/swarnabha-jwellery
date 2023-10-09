export class BodyModel {
    content: any;
    type: 'Dashboard' | 'EntityBuilder' | 'Report';
    // isContentLoaded: boolean;
    // [x:string]:any;
    state:any;
    constructor() {
        this.content = null;
        this.type = 'EntityBuilder';
        // this.isContentLoaded = false;
    }
}

export interface BodyModelProps {
    bodyModel: BodyModel;
}