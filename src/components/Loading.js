import React from 'react';
//import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
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

/*Editor.propTypes = {
  handleChange: PropTypes.func
};*/

export default Loading;
