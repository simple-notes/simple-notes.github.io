import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Route } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles(theme => ({
  card: {
    display: "flex",
    flexFlow: "column nowrap",
    justifyContent: "space-between",
    width: "100%",
    height: 200,
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary
  },
  cardContent: {
    flex: "1 1 auto",
    margin: 16,
    overflow: "hidden"
  },
  cardActions: {
    flex: "0 0 auto",
    display: 'flex',
    alignItems: 'center',
    margin: 8,
    '& > :not(:first-child)': {
      marginLeft: 8
    }
  }
}));

const Note = (props) => {
  const classes = useStyles();

  return (
      <div className={classes.card}>
        <div className={classes.cardContent}>
          <div className={classes.noteContent}>
            {props.note.title && (
              <Typography gutterBottom variant="h5" component="h3">
                {props.note.title}
              </Typography>
            )}
            {props.note.body && (
              <Typography variant="body1">
                {props.note.body}
              </Typography>
            )}
          </div>
          <div className={classes.noteLabels}>
            {
              /*getLabelsData(labelsIds).map(({ id, name }) => {
                return (
                  <Chip
                    key={id}
                    size={"small"}
                    label={name}
                  />
                )
              })*/
            }
          </div>
        </div>
        <div className={classes.cardActions}>
          <Button
            size="small"
            color="primary"
          >
            {"Delete"}
          </Button>
          <Button
            size="small"
            color="primary"
            onClick={() => props.navigate(`/notes/${props.note.id}`)}
          >
            {"Edit"}
          </Button>
        </div>
      </div>
  );
};

export default Note;
