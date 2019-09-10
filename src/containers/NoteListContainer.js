import { connect } from 'react-redux';
import NoteList from '../components/NoteList';

const mapStateToProps = (store) => {
  const { notes: { isFetching, notes } } = store;
  return {
    isFetching: isFetching,
    notes: notes
  };
};

export default connect(mapStateToProps)(NoteList);
