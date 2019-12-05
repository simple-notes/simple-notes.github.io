import React, { useRef } from 'react';
//import PropTypes from 'prop-types';
import LabelsContainer from '../containers/LabelsContainer';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import MoreVertRoundedIcon from '@material-ui/icons/MoreVertRounded';
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';

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
  }
}));

const Editor = ({ note: { labelsIds, title, text }, desktop, open, toggleDrawer, setLabels, saveNote, changeField, closeEditor }) => {
  const inputBody = useRef(null);
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed">
        <div className={classes.toolbar}>
          <div className={classes.leftBlock}>
            <IconButton edge="start" color="inherit" onClick={saveNote}>
              <ArrowBackRoundedIcon />
            </IconButton>
          </div>
          <div className={classes.rightBlock}>
            <IconButton color="inherit">
              <StarBorderRoundedIcon />
            </IconButton>
            <IconButton edge="end" color="inherit" >
              <MoreVertRoundedIcon />
            </IconButton>
          </div>
          <div className={classes.titleBlock}>
            <Input
              fullWidth
              classes={{
                root: classes.inputRoot
              }}
              autoComplete="off"
              value={title}
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
        open={open}
        onClose={toggleDrawer()}
        anchor="right"
      >
        <LabelsContainer
          open={open}
          checkedIds={labelsIds}
          setCheckedIds={setLabels}
        />
      </Drawer>
      <Paper
        square={false}
        elevation={0}
        className={classes.note}
        onClick={() => { inputBody.current.focus() }}
      >
        <InputBase
          fullWidth
          inputRef={inputBody}
          multiline={true}
          autoComplete="off"
          value={text}
          name="text"
          onChange={changeField}
          placeholder="Content"
        />
      </Paper>
    </>
  );
};

/*Editor.propTypes = {
  handleChange: PropTypes.func
};*/

export { Editor };
