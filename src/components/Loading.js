import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(() => ({
  progress: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }
}));

const Loading = () => {
  const classes = useStyles();

  return (
    <div className={classes.progress}>
      <CircularProgress />
    </div>
  );
};

export default Loading;
