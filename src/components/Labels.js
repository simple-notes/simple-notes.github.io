import React from 'react';
//import PropTypes from 'prop-types';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import Typography from "@material-ui/core/Typography";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import DoneRoundedIcon from '@material-ui/icons/DoneRounded';
import EditRoundedIcon from "@material-ui/icons/EditRounded";

const useStyles = makeStyles(theme => ({
  header: {
    padding: theme.spacing(0, 2),
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    justifyContent: "space-between"
  },
  title: {
    color: theme.palette.text.secondary,
    fontFamily: theme.typography.fontFamily,
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: theme.typography.pxToRem(14)
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    "& > li:not(:last-child)": {
      marginBottom: 6
    }
  },
  listItem: {
    width: "100%",
    padding: "0 6px",
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    justifyContent: "space-between"
  },
  labelIcon: {
    padding: 9
  },
  labelText: {
    flexGrow: 1,
    ...theme.typography.body2,
    letterSpacing: "normal",
    margin: theme.spacing(0, 1)
  },
  labelAction: {
    width: 42,
    flex: "0 0 auto"
  },
  newLabelContainer: {
    padding: theme.spacing(0, 2),
    marginTop: theme.spacing(0.5),
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    justifyContent: "center"
  },
  newLabelText: {
    flexGrow: 1,
    margin: theme.spacing(0, 1),
    ...theme.typography.body2,
    letterSpacing: "normal"
  },
  newLabelButton: {
    marginLeft: theme.spacing(1)
  },
  scrollbar: {
    maxHeight: "calc(100vh - 144px)",
    [theme.breakpoints.up('sm')]: {
      maxHeight: "calc(100vh - 200px)"
    }
  }
}));

const Labels = ({
  labels,
  checkedIds,
  toggleCheck,
  edit,
  toggleEditor,
  selectEditedLabel,
  editedLabel,
  newLabel,
  changeName,
  createLabel,
  updateLabel,
  deleteLabel
}) => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.header}>
        <Typography className={classes.title}>
          Labels
        </Typography>
        <IconButton edge="end" size="small" onClick={toggleEditor}>
          <EditRoundedIcon fontSize="small" />
        </IconButton>
      </div>
      <SimpleBar className={classes.scrollbar}>
        <ul className={classes.list}>
          {
            labels.map((label) => {
              return (
                <li
                  key={label.id}
                  className={classes.listItem}
                  onClick={edit ? selectEditedLabel(label) : toggleCheck(label.id)}
                >
                  {
                    edit
                      ? (
                        <IconButton
                          color="primary"
                          className={classes.labelIcon}
                          onClick={deleteLabel(label.id)}
                        >
                          <DeleteRoundedIcon color="primary" />
                        </IconButton >
                      )
                      : (
                        <Checkbox
                          disableRipple
                          checked={checkedIds.includes(label.id)}
                          color="primary"
                        />
                      )
                  }
                  {
                    label.id === editedLabel.id
                      ? (
                        <Input
                          error={editedLabel.error}
                          value={editedLabel.name}
                          autoFocus
                          className={classes.labelText}
                          onChange={changeName(label.name)}
                        />
                      )
                      : (
                        <Typography
                          noWrap
                          className={classes.labelText}
                        >
                          {label.name}
                        </Typography>
                      )
                  }
                  <div className={classes.labelAction}>
                    {
                      label.id === editedLabel.id && (
                        <IconButton
                          color="primary"
                          disabled={editedLabel.disabled}
                          className={classes.labelIcon}
                          onClick={updateLabel}
                        >
                          <DoneRoundedIcon color={editedLabel.disabled ? "disabled" : "primary"} />
                        </IconButton>
                      )
                    }
                  </div>
                </li >
              );
            })
          }
        </ul>
      </SimpleBar>
      {
        edit && (
          <div className={classes.newLabelContainer}>
            <Input
              error={newLabel.error}
              value={newLabel.name}
              onChange={changeName()}
              className={classes.newLabelText}
            />
            <Button
              disabled={newLabel.disabled}
              size="small"
              variant="contained"
              color="primary"
              className={classes.newLabelButton}
              onClick={createLabel}
            >
              Add
            </Button>
          </div>
        )
      }
    </div >
  );
};

/*Editor.propTypes = {
  handleChange: PropTypes.func
};*/

export default Labels;
