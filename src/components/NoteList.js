import React from 'react';
import PropTypes from 'prop-types';

import { getLabelsData } from '../services/library';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
  return ({
    notesContainer: {
      position: 'relative',
      margin: "auto",
      maxWidth: 1150,
      paddingTop: 56
    }
  })
});

const NoteList = ({ desktop, notes, openEditor, deleteNote }) => {
  const classes = useStyles();

  return (
    <Container>
      <div className={classes.notesContainer}>
        <Grid container spacing={desktop ? 3 : 1}>
          {
            notes.map(note => {
              const { id, title, text, labelsIds } = note;
              return (
                <Grid key={id} item xs={12} md={6} lg={4}>
                  <Card className={classes.note}>
                    <CardContent className={classes.noteContent}>
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
                      <Typography>
                        {text}
                      </Typography>
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
                </Grid>
              );
            })
          }
        </Grid>
      </div>
    </Container>
  );
};

NoteList.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element)
};

export default NoteList;
