import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";

import Divider from "@material-ui/core/Divider";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";

import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";

let labels = [
  { id: 0, name: "green" },
  { id: 1, name: "red" },
  { id: 2, name: "blue" },
  { id: 3, name: "black" }
];

const useStyles = makeStyles(theme => ({
  filtersContainer: {
    width: 240
  },
  filtersHeader: {
    height: 64,
    padding: theme.spacing(0, 2),
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    justifyContent: "space-between"
  },
  filtersBody: {},
  labelsContainer: {},
  labelsHeader: {
    padding: theme.spacing(0.5, 2, 0),
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    justifyContent: "space-between"
  },
  labelsBody: {},
  labelsFooter: {
    padding: theme.spacing(0, 2, 0.5),
    display: "flex",
    justifyContent: "center"
  },
  labelsTitle: {
    color: theme.palette.text.secondary,
    fontFamily: theme.typography.fontFamily,
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: theme.typography.pxToRem(14)
  },
  labelsList: {
    listStyle: "none",
    paddingLeft: "19px",
    margin: 0,
    "& li:not(:last-child)": {
      marginBottom: "6px"
    }
  },
  labelsListItem: {
    width: "100%",
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center"
  },
  labelIcon: {
    padding: "9px",
    marginLeft: "-12px"
  },
  labelText: {
    marginLeft: "6px"
  },
  labelAddButton: {
    marginLeft: theme.spacing(1)
  }
}));

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const [edit, setEdit] = useState(true);
  const [checked, setChecked] = useState([0, 2]);

  const toggleDrawer = () => () => {
    setOpen(!open);
  };

  const toggleEditor = () => () => {
    setEdit(!edit);
    if (edit) {
      setChecked([]);
    }
  };

  const deleteLable = targetId => () => {
    //bug
    const { id } = labels.find(({ id }) => {
      return targetId === id;
    });
    labels.splice(id, 1);
  };

  const handleToggle = id => () => {
    const currentIndex = checked.indexOf(id);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(id);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const sideList = () => (
    <div className={classes.filtersContainer}>
      <div className={classes.filtersHeader}>
        <Typography variant="h6" noWrap>
          Filters
        </Typography>
        <IconButton edge="end" color="inherit" onClick={toggleDrawer()}>
          <CloseRoundedIcon />
        </IconButton>
      </div>
      <Divider />
      <div className={classes.filtersBody}>
        <div className={classes.labelsContainer}>
          <div className={classes.labelsHeader}>
            <Typography className={classes.labelsTitle}>Labels</Typography>
            <IconButton edge="end" size="small" onClick={toggleEditor()}>
              <EditRoundedIcon fontSize="small" />
            </IconButton>
          </div>
          <div className={classes.labelsBody}>
            <ul className={classes.labelsList}>
              <li
                key={8}
                className={classes.labelsListItem}
                onClick={handleToggle(8)}
              >
                {edit ? (
                  <IconButton color="primary" className={classes.labelIcon}>
                    <DeleteRoundedIcon color="primary" />
                  </IconButton>
                ) : (
                  <Checkbox
                    edge="start"
                    disabled={edit}
                    disableRipple
                    checked={checked.includes(8)}
                    color="primary"
                  />
                )}
                <Typography
                  variant="body2"
                  noWrap
                  className={classes.labelText}
                >
                  Label
                </Typography>
              </li>
              {labels.map(({ id, name }) => {
                return (
                  <li
                    key={id}
                    className={classes.labelsListItem}
                    onClick={handleToggle(id)}
                  >
                    {edit ? (
                      <IconButton
                        color="primary"
                        className={classes.labelIcon}
                        onClick={deleteLable(id)}
                      >
                        <DeleteRoundedIcon color="primary" />
                      </IconButton>
                    ) : (
                      <Checkbox
                        edge="start"
                        disabled={edit}
                        disableRipple
                        checked={checked.includes(id)}
                        color="primary"
                      />
                    )}
                    <Typography
                      variant="body2"
                      noWrap
                      className={classes.labelText}
                    >
                      {name}
                    </Typography>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={classes.labelsFooter}>
            {edit && (
              <>
                <Input className={classes.labelText} />
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  className={classes.labelAddButton}
                >
                  Add
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <CssBaseline />
      <Button onClick={toggleDrawer()}>Open</Button>
      <Drawer anchor="right" open={open} onClose={toggleDrawer()}>
        {sideList()}
      </Drawer>
    </div>
  );
}
