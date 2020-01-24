import React from 'react';
//import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Typography from "@material-ui/core/Typography";
import InputAdornment from "@material-ui/core/InputAdornment";
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Fab from '@material-ui/core/Fab';
import Paper from '@material-ui/core/Paper';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import FilterListRoundedIcon from '@material-ui/icons/FilterListRounded';
import Filters from './Filters';
import NoteList from './NoteList';

const useStyles = makeStyles(theme => ({
  appbar: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: theme.zIndex.appBar,
    borderBottom: `1px solid ${theme.palette.divider}`,
    [theme.breakpoints.up("md")]: {
      width: "calc(100% - 256px)",
    }
  },
  toolbar: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-between",
    alignItems: "center",
    height: 55,
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
    width: "100%",
    maxWidth: 720
  },
  searchRoot: {
    display: "flex",
    alignItems: "center",
    height: 39
  },
  searchInput: {
    paddingRight: theme.spacing(1)
  },
  fab: {
    position: "fixed",
    boxShadow: "none",
    '&:active': {
      boxShadow: "none",
    },
    [theme.breakpoints.up("md")]: {
      top: theme.spacing(9),
      left: theme.spacing(9),
    },
    [theme.breakpoints.down("md")]: {
      bottom: theme.spacing(2),
      right: theme.spacing(2)
    }
  },
  content: {
    paddingTop: theme.spacing(7),
    [theme.breakpoints.up("md")]: {
      paddingRight: 256
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
  deleteNote
}) => {
  const classes = useStyles();

  return (
    <>
      <Paper
        elevation={0}
        square
        className={classes.appbar}
      >
        <div className={classes.toolbar}>
          <div className={classes.leftBlock}>
            <Typography variant="h6" noWrap>
              Notes
            </Typography>
          </div>
          <div className={classes.middleBlock}>
            <OutlinedInput
              className={classes.search}
              classes={{
                root: classes.searchRoot,
                input: classes.searchInput
              }}
              placeholder="Search…"
              value={query.string}
              onChange={changeQueryString}
              autoFocus
              startAdornment={
                <InputAdornment position="start">
                  <SearchRoundedIcon />
                </InputAdornment>
              }
            />
          </div>
          <div className={classes.rightBlock}>
            {
              !desktop && (
                <IconButton edge="end" color="inherit" onClick={toggleDrawer}>
                  <FilterListRoundedIcon />
                </IconButton>
              )
            }
          </div>
        </div>
      </Paper>
      <div
        className={classes.content}
      >
        <NoteList
          notes={notes}
          desktop={desktop}
          openEditor={openEditor}
          deleteNote={deleteNote}
        />
      </div>
      <Filters
        desktop={desktop}
        drawer={drawer}
        toggleDrawer={toggleDrawer}
        query={query}
        setQueryLabelsIds={setQueryLabelsIds}
      />
      <Fab
        className={classes.fab}
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
