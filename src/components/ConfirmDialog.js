import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const ConfirmDialog = ({
  open,
  locale,
  cancelAction,
  mainAction,
  secondAction
}) => {
  return (
    <Dialog
      open={open}
      onClose={cancelAction}
    >
      <DialogTitle>
        {locale.title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          {locale.text}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        {
          mainAction
            ? (
              secondAction
                ? (
                  <>
                    <Button onClick={cancelAction} color="primary">
                      {locale.cancelBtnText}
                    </Button>
                    <Button onClick={mainAction} color="primary">
                      {locale.mainBtnText}
                    </Button>
                    <Button onClick={secondAction} variant="contained" color="primary" autoFocus>
                      {locale.secondBtnText}
                    </Button>
                  </>
                )
                : (
                  <>
                    <Button onClick={cancelAction} color="primary">
                      {locale.cancelBtnText}
                    </Button>
                    <Button onClick={mainAction} variant="contained" color="primary" autoFocus>
                      {locale.mainBtnText}
                    </Button>
                  </>
                )
            )
            : (
              <Button onClick={cancelAction} variant="contained" color="primary" autoFocus>
                {"OK"}
              </Button>
            )
        }
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
