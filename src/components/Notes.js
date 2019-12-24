import React from 'react';
//import PropTypes from 'prop-types';
import clsx from 'clsx';
import LabelsContainer from '../containers/LabelsContainer';
import ConfirmContainer from '../containers/ConfirmContainer';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import Fab from '@material-ui/core/Fab';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import FilterListRoundedIcon from '@material-ui/icons/FilterListRounded';
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import NoteList from './NoteList';

const useStyles = makeStyles(theme => ({
  toolbar: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-between",
    alignItems: "center",
    height: 56,
    padding: theme.spacing(0.5, 2)
  },
  leftBlock: {
    display: "none",
    [theme.breakpoints.up('sm')]: {
      flex: "0 0 120px",
      display: "flex",
      justifyContent: "flex-start",
      paddingLeft: theme.spacing(7),
      marginRight: theme.spacing(0.5)
    }
  },
  middleBlock: {
    flex: "1 1 auto",
    display: "flex",
    justifyContent: "center"
  },
  rightBlock: {
    flex: "0 0 auto",
    display: "flex",
    marginLeft: theme.spacing(0.5),
    justifyContent: "flex-end",
    [theme.breakpoints.up('sm')]: {
      flex: "0 0 120px"
    }
  },
  search: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    width: "100%",
    maxWidth: 720,
    height: 38
  },
  searchIcon: {
    width: theme.spacing(7),
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  searchRoot: {
    color: "inherit",
    width: "100%"
  },
  searchInput: {
    padding: theme.spacing(1, 1, 1, 7)
  },
  drawerPaper: {
    width: 256,
    [theme.breakpoints.up('sm')]: {
      zIndex: theme.zIndex.appBar - 1,
      top: 56
    }
  },
  filtersHeader: {
    height: 55,
    padding: theme.spacing(0, 2),
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    justifyContent: "space-between"
  },
  filtersBody: {
    padding: theme.spacing(1, 0)
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      bottom: theme.spacing(3),
      right: theme.spacing(5),
    }
  },
  unshift: {
    [theme.breakpoints.up("sm")]: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginRight: 0
    }
  },
  shift: {
    [theme.breakpoints.up("sm")]: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 256
    }
  }
}));

const Notes = ({
  desktop,
  notes,
  drawer,
  toggleDrawer,
  query,
  changeQueryString,
  setQueryLabelsIds,
  openEditor,
  deleteNote,
  dialogOpen,
  setDialogOpen,
  deleteFunc
}) => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed">
        <div className={classes.toolbar}>
          <div className={classes.leftBlock}>
            <Typography variant="h6" noWrap>
              Notes
            </Typography>
          </div>
          <div className={classes.middleBlock}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchRoundedIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.searchRoot,
                  input: classes.searchInput
                }}
                value={query.string}
                onChange={changeQueryString}
                autoFocus
              />
            </div>
          </div>
          <div className={classes.rightBlock}>
            <IconButton edge="end" color="inherit" onClick={toggleDrawer}>
              <FilterListRoundedIcon />
            </IconButton>
          </div>
        </div>
      </AppBar>
      <Drawer
        classes={{
          paper: classes.drawerPaper
        }}
        variant={desktop ? "persistent" : "temporary"}
        open={drawer}
        onClose={toggleDrawer}
        anchor="right"
      >
        <div className={classes.filtersHeader}>
          <Typography variant="h6" noWrap>
            Filters
            </Typography>
          {
            desktop &&
            <IconButton edge="end" color="inherit" onClick={toggleDrawer}>
              <CloseRoundedIcon />
            </IconButton>
          }
        </div>
        <Divider />
        <div className={classes.filtersBody}>
          <LabelsContainer
            open={drawer}
            checkedIds={query.labelsIds}
            setCheckedIds={setQueryLabelsIds}
          />
        </div>
      </Drawer>
      <div
        className={clsx(classes.content, {
          [classes.shift]: drawer,
          [classes.unshift]: !drawer
        })}
      >
        <NoteList
          notes={notes}
          desktop={desktop}
          openEditor={openEditor}
          deleteNote={deleteNote}
        />
      </div>
      <ConfirmContainer 
        open={dialogOpen}
        setOpen={setDialogOpen}
        title={"Deleting note"}
        text={"Do you really want to delete this note?"}
        btnText={"delete"}
        action={deleteFunc}
      />
      <Fab
        className={clsx(classes.fab, {
          [classes.shift]: drawer,
          [classes.unshift]: !drawer
        })}
        color="primary"
        aria-label="add"
        onClick={openEditor()}
      >
        <AddRoundedIcon />
      </Fab>
    </>
  );
};

/*Editor.propTypes = {
        handleChange: PropTypes.func
};*/

export default Notes;
