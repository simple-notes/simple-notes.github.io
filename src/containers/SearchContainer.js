import { connect } from 'react-redux';
import { getNotes } from '../actions/notes';
import { debounceEvent } from '../services/fetch';
import Search from '../components/Search';

const mapDispatchToProps = dispatch => {
  return {
    handleChange: debounceEvent(event => {
      const { target: { value } } = event;
      dispatch(getNotes(value));
    }, 500)
  };
};

export default connect(null, mapDispatchToProps)(Search);
