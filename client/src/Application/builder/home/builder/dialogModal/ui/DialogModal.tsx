import React from "react";
import {
  DialogModalModel,
  DialogModalModelProps,
} from "../model/DialogModalModel";
import { Box, Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import { useSelector } from "react-redux";
import { setModalOpen } from "../../../../../../redux/modal/modalSlice";
import { useDispatch } from "react-redux";
import { uniqueId } from "lodash";
import '../style/DialogModalStyle.css';

export const buildDialogModalComponent = (
  dialogModalModel: DialogModalModel
) => <DialogModal key={uniqueId()} dialogModalModel={dialogModalModel} />;

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const DialogModal = (props: DialogModalModelProps) => {
  const dialogModalModel = props.dialogModalModel;
  dialogModalModel.open = useSelector((state: any) => state.modal.open);
  dialogModalModel.dispatch = useDispatch();
  const handleClose = () => dialogModalModel.dispatch(setModalOpen(false));
  return (
      <Dialog
        open={dialogModalModel.open}
        // onClose={handleClose}
        fullWidth
        maxWidth={dialogModalModel.maxWidth}
        // className="dialog-box"
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle className="dialog-title">{dialogModalModel.title}</DialogTitle>
        <DialogContent className="dialog-content">
            {dialogModalModel?.content?? null}
        </DialogContent>
        <DialogActions className="dialog-action">
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={()=>{}}>Ok</Button>
        </DialogActions>
      </Dialog>
  );
};
