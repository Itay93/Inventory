import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";

const DeleteAlertDialog = ({ show, onDelete, onDismiss }) => {
  return (
    <div>
      <Dialog open={show}>
        <DialogTitle>Caution</DialogTitle>
        <DialogContent>
          <DialogContentText>Are you sure?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onDelete}>I׳m sure!</Button>
          <Button onClick={onDismiss}>No...</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DeleteAlertDialog;
