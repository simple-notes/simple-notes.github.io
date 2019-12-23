import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  dialogBody: {
    padding: theme.spacing(2)
  },
  dialogTitle: {
    marginBottom: theme.spacing(5)
  },
  confirmBtn: {
    width: "20%",
    float: "right",
    marginRight: theme.spacing(3)
  },
  cancelBtn: {
    float: "right",
    width: "20%"
  }
}));

const ConfirmDialog = ({onConfirm, open, onClose, dialogContent}) => {
  const classes = useStyles();

  const handleConfirm = () => {
    onConfirm();
    onClose();
  }

  return (
    <Dialog open={open} aria-labelledby="confirm-dialog-title">
      <div className={classes.dialogBody}>
        <DialogTitle id="confirm-dialog-title" className={classes.dialogTitle}>
          {dialogContent}
        </DialogTitle>
        
        <Button variant="outlined" color="primary" onClick={onClose} className={classes.cancelBtn}>
          Cancel
        </Button>

        <Button variant="contained" color="secondary" onClick={handleConfirm} className={classes.confirmBtn}>
          Delete
        </Button>
      </div>
    </Dialog>
  );
}

export default ConfirmDialog;