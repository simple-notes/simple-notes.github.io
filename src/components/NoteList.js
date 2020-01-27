import React from 'react';
import PropTypes from 'prop-types';
import { getLabelsData } from '../services/notes';
import { Flipper, Flipped } from "react-flip-toolkit";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
  return ({
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
      gridGap: theme.spacing(1),
      width: "100%",
      padding: theme.spacing(1),
      [theme.breakpoints.only("sm")]: {
        padding: theme.spacing(1, 11)
      },
      [theme.breakpoints.up("md")]: {
        gridGap: theme.spacing(2),
        padding: theme.spacing(2, 2, 0, 18)
      }
    },
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
  })
});

const NoteList = ({ desktop, notes, openEditor, deleteNote }) => {
  const classes = useStyles();

  return (
    <Flipper flipKey={JSON.stringify(notes.map(({ id }) => id))}>
      <div className={classes.grid}>
        {
          notes.map(note => {
            const { id, title, text, labelsIds } = note;
            return (
              <Flipped flipId={id}>
                <div className={classes.card} key={id}>
                  <div className={classes.cardContent}>
                    <div className={classes.noteContent}>
                      {title && (
                        <Typography gutterBottom variant="h5" component="h3">
                          {title}
                        </Typography>
                      )}
                      {text && (
                        <Typography variant="body1">
                          {text}
                        </Typography>
                      )}
                    </div>
                    <div className={classes.noteLabels}>
                      {
                        getLabelsData(labelsIds).map(({ id, name }) => {
                          return (
                            <Chip
                              key={id}
                              size={"small"}
                              label={name}
                            />
                          )
                        })
                      }
                    </div>
                  </div>
                  <div className={classes.cardActions}>
                    <Button size="small" color="primary"
                      onClick={deleteNote(id)}
                    >
                      {"Delete"}
                    </Button>
                    <Button size="small" color="primary"
                      onClick={openEditor(note)}
                    >
                      {"Edit"}
                    </Button>
                  </div>
                </div>
              </Flipped>
            );
          })
        }
      </div>
    </Flipper>
  );
};

NoteList.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element)
};

export default NoteList;
