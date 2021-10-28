import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";

const ErrorAlertDialog = ({ message, onDismiss }) => {
  return (
    <div>
      <Dialog open>
        <DialogTitle>Error</DialogTitle>
        <DialogContent>
          <DialogContentText>{message}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onDismiss}>Got it</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ErrorAlertDialog;
