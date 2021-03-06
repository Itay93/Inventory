import "../config/style.css";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  CircularProgress,
} from "@material-ui/core";

const LoadingAlertDialog = () => {
  return (
    <div>
      <Dialog open>
        <DialogContent>
          <div className="loading-alert-container">
            <div className="circular-progress-container">
              <CircularProgress />
            </div>
            <DialogContentText>Loading...</DialogContentText>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LoadingAlertDialog;
