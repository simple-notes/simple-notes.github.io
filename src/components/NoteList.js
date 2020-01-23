import React from 'react';
import PropTypes from 'prop-types';
import { getLabelsData } from '../services/notes';
import { Flipper, Flipped } from "react-flip-toolkit";
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';
import * as MarkdownConverter from '../services/markdown-converter';

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
    note: {
      width: "100%",
      height: 200
    },
    noteContent: {
      "& *": {
        margin: 0
      },
      "& img": {
        width: "100%"
      },
      "& p": {
        ...(theme.typography.body1),
      },
      "& h1": {
        ...(theme.typography.h1)
      },
      "& h2": {
        ...(theme.typography.h2)
      },
      "& h3": {
        ...(theme.typography.h3)
      },
      "& h4": {
        ...(theme.typography.h4)
      },
      "& h5": {
        ...(theme.typography.h5)
      },
      "& h6": {
        ...(theme.typography.h6)
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
                <Card className={classes.note} key={id} variant="outlined">
                  <CardContent>
                    <div>
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
                    <Typography gutterBottom variant="h5" component="h2">
                      {title}
                    </Typography>
                    <div className={classes.noteContent}>
                      {
                        MarkdownConverter.toReactElement(text)
                      }
                    </div>
                  </CardContent>
                  <CardActions>
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
                  </CardActions>
                </Card>
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
