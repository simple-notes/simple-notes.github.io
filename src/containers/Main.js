import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import files from '../services/files';
import ToolBar from './ToolBar';
import clsx from 'clsx';
import Notes from './Notes';
import Labels from './Labels';

import CssBaseline from '@material-ui/core/CssBaseline';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  appContent: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    width: "100%",
    transition: "width 0.25s cubic-bezier(0.4, 0, 0.2, 1)"
  },
  appContentShift: {
    [theme.breakpoints.up('md')]: {
      width: "calc(100% - 256px)"
    }
  },
  appBar: {
    position: "relative",
    display: "flex",
    flexShrink: 0,
    width: "100%",
    height: 56,
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
    backgroundColor: "#fff",
    transition: "width 0.25s cubic-bezier(0.4, 0, 0.2, 1)"
  },
  pageContent: {
    position: "relative",
    flex: "1 1 auto",
    minHeight: 100,
    overflowY: "auto",
    background: "#fafafa",
    "&::-webkit-scrollbar": {
      //display: "none"
    }
  },
  drawer: {
    position: "fixed",
    right: -256,
    zIndex: 10,
    width: 256,
    height: "100%",
    borderLeft: "1px solid rgba(0, 0, 0, 0.12)",
    backgroundColor: "#fff",
    transition: "right 0.25s cubic-bezier(0.4, 0, 0.2, 1)"
  },
  drawerShift: {
    right: 0
  },
  drawerBack: {
    display: "none",
    [theme.breakpoints.down('sm')]: {
      opacity: 0,
      transition: "opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1)"
    }
  },
  drawerBackShowed: {
    [theme.breakpoints.down('sm')]: {
      position: "fixed",
      top: 0,
      left: 0,
      display: "block",
      width: "100%",
      height: "100%",
      zIndex: 8,
      opacity: 1,
      backgroundColor: "rgba(0,0,0,.32)"
    }
  }
}));

const Main = (props) => {
  const classes = useStyles();

  const [queryParams, updateQueryParams] = useState({
    filter: "",
    labels: [],
    display: "grid",
    sort: "byCreateDateAscending"
  });

  const [drawer, setDrawer] = useState(true);

  /*useEffect(() => {
    files.getMetaByName('options');
  }, [files]);*/

  const updateQuery = (obj) => {
    updateQueryParams({ ...queryParams, ...obj });
  };

  const toggleDrawer = () => {
    setDrawer(!drawer);
  };

  const navigate = (pathname, isModal) => {
    props.history.push({
      pathname,
      state: isModal && { background: props.history.location }
    });
  };

  return (
    <>
      <CssBaseline />
      <div
        className={clsx(classes.appContent, {
          [classes.appContentShift]: drawer
        })}
      >
        <div className={classes.appBar}>
          <ToolBar
            toggleDrawer={toggleDrawer}
            query={queryParams}
            updateQuery={updateQuery}
            history={props.history}
          />
        </div>
        <div className={classes.pageContent}>
          <Switch location={props.background || props.location}>
            <Route path="/notes">
              <Notes
                query={queryParams}
                navigate={navigate}
              />
            </Route>
            <Route path="*" children={<Redirect to="/notes" />} />
          </ Switch>
          {props.background && <Route path="/labels/:id" children={<Labels />} />}
          <div
            className={clsx(classes.drawerBack, {
              [classes.drawerBackShowed]: drawer
            })}
            onClick={toggleDrawer}>
          </div>
        </div>
        <div className={clsx(classes.drawer, {
          [classes.drawerShift]: drawer
        })}>
        </div>
        <div className={clsx(classes.drawerBack, {
          [classes.drawerBackShowed]: drawer
        })} onClick={toggleDrawer}/>
      </div>
    </>
  );
};

const mapStateToProps = (state, props) => ({
  background: props.location.state && props.location.state.background
});

export default withRouter(connect(mapStateToProps)(Main));
