import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";

const AlertDialog = ({ title, message, handleDismiss }) => {
  const [show, setShow] = useState(true);

  return (
    <div>
      <Dialog open={show}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{message}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDismiss}>OK</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AlertDialog;
