import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const Confirm = ({
  open,
  title,
  text,
  btnText,
  cancelAction,
  submitAction,
  hideCancelBtn
}) => {
  return (
    <Dialog
      open={open}
      onClose={cancelAction}
    >
      <DialogTitle>
        {title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          {text}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        {
          !hideCancelBtn && (
            <Button onClick={cancelAction} color="primary">
              Cancel
            </Button>
          )
        }

        <Button onClick={submitAction} variant="contained" color="primary" autoFocus>
          {btnText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Confirm;
