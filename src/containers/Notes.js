import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { selectNotes } from '../selectors/notes';
import Note from './Note';

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex"
  },
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
}));

const Notes = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.grid}>
        {
          props.notes.map((note) => {
            return (
              <Note
                key={note.id}
                note={note}
                navigate={props.navigate}
              />
            )
          })
        }

      {/*<button onClick={() => props.navigate('/labels/12', true)}>{'Link to label'}</button>*/}
      </div>
      <Route path="/notes/:id" children={<div>{'check routing to editor'}</div>} />
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  notes: selectNotes(state, props)
});

export default connect(mapStateToProps)(Notes);
