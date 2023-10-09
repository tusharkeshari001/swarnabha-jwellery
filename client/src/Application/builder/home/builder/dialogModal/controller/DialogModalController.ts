import { DialogModalModel } from "../model/DialogModalModel"
import { buildDialogModalComponent } from "../ui/DialogModal"

export const buildDialogModal = (dialogModalModel: DialogModalModel) => {
    return buildDialogModalComponent(dialogModalModel)
}
