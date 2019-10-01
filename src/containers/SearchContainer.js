import { connect } from 'react-redux';
import { getNotes } from '../actions/notes';
import { debounceEvent } from '../services/events';
import Search from '../components/Search';

const mapDispatchToProps = dispatch => {
  return {
    handleChange: debounceEvent(event => {
      const { target: { value } } = event;
      dispatch(getNotes(value));
    })
  };
};

export default connect(null, mapDispatchToProps)(Search);
