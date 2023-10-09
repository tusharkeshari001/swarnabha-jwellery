export class DialogModalModel {
    title:string;
    content:any;
    maxWidth: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    open:boolean;
    dispatch:any;
    constructor() {
        this.title = "Modal Popup";
        this.content = null;
        this.maxWidth = 'xl';
        this.open = false;
    }
}

export interface DialogModalModelProps {
    dialogModalModel: DialogModalModel;
}