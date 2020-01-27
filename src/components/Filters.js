import React from 'react';
//import PropTypes from 'prop-types';
import LabelsContainer from '../containers/LabelsContainer';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";

const useStyles = makeStyles(theme => ({
  paper: {
    width: 256
  },
  header: {
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    justifyContent: "space-between",
    height: 56,
    borderBottom: `1px solid ${theme.palette.divider}`,
    padding: theme.spacing(0, 2)
  },
  body: {
    padding: theme.spacing(1, 0)
  }
}));

const Filters = ({
  desktop,
  drawer,
  toggleDrawer,
  query,
  setQueryLabelsIds
}) => {
  const classes = useStyles();

  return (
      <Drawer
        classes={{
          paper: classes.paper
        }}
        variant={desktop ? "persistent" : "temporary"}
        open={drawer}
        onClose={toggleDrawer}
        anchor="right"
      >
        <div className={classes.header}>
          <Typography variant="h6" noWrap>
            Filters
            </Typography>
          {
            !desktop && (
              <IconButton edge="end" color="inherit" onClick={toggleDrawer}>
                <CloseRoundedIcon />
              </IconButton>
            )
          }
        </div>
        <div className={classes.body}>
          <LabelsContainer
            open={drawer}
            checkedIds={query.labelsIds}
            setCheckedIds={setQueryLabelsIds}
          />
        </div>
      </Drawer>
  );
};

/*Editor.propTypes = {
        handleChange: PropTypes.func
};*/

export default Filters;
