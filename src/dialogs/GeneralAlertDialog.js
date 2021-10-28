import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";

const GeneralAlertDialog = ({ title, message, handleDismiss }) => {
  return (
    <div>
      <Dialog open>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{message}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDismiss}>Got it</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default GeneralAlertDialog;
