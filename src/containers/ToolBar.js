import React from 'react';
//import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Typography from "@material-ui/core/Typography";
import InputAdornment from "@material-ui/core/InputAdornment";
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Paper from '@material-ui/core/Paper';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import FilterListRoundedIcon from '@material-ui/icons/FilterListRounded';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Switch, Route } from 'react-router-dom';


const useStyles = makeStyles(theme => ({
  toolbar: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "100%",
    padding: theme.spacing(0, 2),
  },
  leftBlock: {
    flex: "0 0 auto",
    display: "flex",
    marginRight: theme.spacing(0.5),
    justifyContent: "flex-start",
    alignItems: "center",
    [theme.breakpoints.up('sm')]: {
      flex: "0 0 120px"
    }
  },
  middleBlock: {
    flex: "1 1 auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
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
  title: {
    display: "none",
    [theme.breakpoints.up('sm')]: {
      display: "block",
      paddingLeft: theme.spacing(0.5),
      marginRight: theme.spacing(0.5)
    }
  },
  search: {
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
  }
}));

const AppBar = (props) => {
  const classes = useStyles();
  const desktop = useMediaQuery('(min-width:768px)');

  const changeFilter = (event) => {
    props.updateQuery({ filter: event.target.value });
  };

  return (
    <Paper
      elevation={0}
      square
      className={classes.toolbar}
    >
      <div className={classes.leftBlock}>
        <Switch>
          <Route exact path="/notes" />
          <Route path="*">
            <IconButton edge="start" color="inherit" onClick={props.history.goBack}>
              <ArrowBackRoundedIcon />
            </IconButton>
          </Route>
        </Switch>
        <Typography className={classes.title} variant="h6" component="h1" noWrap>
          {"Notes"}
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
          value={props.query.filter}
          onChange={changeFilter}
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
          <IconButton edge="end" color="inherit" onClick={props.toggleDrawer}>
            <FilterListRoundedIcon />
          </IconButton>
        }
      </div>
    </Paper>
  );
}

export default AppBar;