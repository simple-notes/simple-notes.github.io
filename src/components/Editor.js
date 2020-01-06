import React, { useRef } from 'react';
//import PropTypes from 'prop-types';
import LabelsContainer from '../containers/LabelsContainer';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import BookmarksRoundedIcon from '@material-ui/icons/BookmarksRounded';
import SaveRoundedIcon from '@material-ui/icons/SaveRounded';
import * as MarkdownConverter from '../services/markdown-converter';

const useStyles = makeStyles(theme => ({
  toolbar: {
    display: "flex",
    flexFlow: "row wrap",
    height: 112,
    padding: theme.spacing(0.5, 2)
  },
  leftBlock: {
    flex: "1 0 0",
    alignSelf: "flex-start",
    display: "flex"
  },
  rightBlock: {
    flex: "1 0 0",
    alignSelf: "flex-start",
    display: "flex",
    justifyContent: "flex-end"
  },
  titleBlock: {
    flex: "1 0 100%",
    //alignSelf: "flex-start",
    paddingBottom: theme.spacing(1.5),
    paddingLeft: theme.spacing(7)
  },
  note: {
    padding: theme.spacing(17, 2, 0, 2),
    minHeight: "100vh"
  },
  inputRoot: {
    color: "rgb(255, 255, 255)",
    fontSize: "1.5rem",
    lineHeight: 1.33,
    letterSpacing: "0em",
    "&.MuiInput-underline:after": {
      borderBottomColor: "rgb(255, 255, 255)"
    },
    "&.MuiInput-underline:before": {
      borderBottomColor: "rgba(255, 255, 255, 0.42)"
    },
    "&.MuiInput-underline:hover:before": {
      borderBottomColor: "rgba(255, 255, 255, 0.42)"
    }
  },
  drawerPaper: {
    width: 256,
    padding: theme.spacing(1, 0),
    [theme.breakpoints.up('sm')]: {
      zIndex: theme.zIndex.appBar - 1,
      top: 112
    }
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      bottom: theme.spacing(3),
      right: theme.spacing(5) + 256,
    }
  },
  changeModeBtn: {
    position: "fixed",
    top: theme.spacing(2) + 112,
    right: theme.spacing(2) + 256
  }
}));

const Editor = ({
  note,
  desktop,
  drawer,
  toggleDrawer,
  changeField,
  setLabelsIds,
  saveNote,
  closeNote,
  showRendered,
  changeRenderedMode
}) => {
  const inputBody = useRef(null);
  const classes = useStyles();

  const onInputFocus = () => {
    if (inputBody.current) {
      inputBody.current.focus();
    }
  }

  return (
    <>
      <AppBar position="fixed">
        <div className={classes.toolbar}>
          <div className={classes.leftBlock}>
            <IconButton edge="start" color="inherit" onClick={closeNote}>
              <ArrowBackRoundedIcon />
            </IconButton>
          </div>
          <div className={classes.rightBlock}>
            {!desktop && (
              <IconButton edge="end" color="inherit" onClick={toggleDrawer}>
                <BookmarksRoundedIcon />
              </IconButton>
            )}
          </div>
          <div className={classes.titleBlock}>
            <Input
              fullWidth
              classes={{
                root: classes.inputRoot
              }}
              autoComplete="off"
              value={note.title}
              name="title"
              placeholder="Title"
              onChange={changeField}
            />
          </div>
        </div>
      </AppBar>
      <Drawer
        classes={{
          paper: classes.drawerPaper
        }}
        variant={desktop ? "persistent" : "temporary"}
        open={desktop ? true : drawer}
        onClose={toggleDrawer}
        anchor="right"
      >
        <LabelsContainer
          open={drawer}
          checkedIds={note.labelsIds}
          setCheckedIds={setLabelsIds}
        />
      </Drawer>
      <Paper
        square={false}
        elevation={0}
        className={classes.note}
        onClick={onInputFocus}
      >
      {
        showRendered
          ? MarkdownConverter.toReactElement(note.text)
          : (
            <InputBase
              fullWidth
              inputRef={inputBody}
              multiline={true}
              autoComplete="off"
              value={note.text}
              name="text"
              onChange={changeField}
              placeholder="Content"
            />
          )
      }
      </Paper>
      <Button 
        className={classes.changeModeBtn}
        variant="contained"
        color="primary"
        onClick={changeRenderedMode}
      >
        Mode
      </Button>
      <Fab
        className={classes.fab}
        color="primary"
        aria-label="add"
        onClick={saveNote}
      >
        <SaveRoundedIcon />
      </Fab>
    </>
  );
};

/*Editor.propTypes = {
  handleChange: PropTypes.func
};*/

export default Editor;
