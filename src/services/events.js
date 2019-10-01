import debounce from 'lodash/debounce';
import { defaultDebounceTimeMs } from '../config'

export const debounceEvent = (func, timeout = defaultDebounceTimeMs) => {
  const debouncedEvent = debounce(func, timeout);
  return event => {
    event.persist();
    return debouncedEvent(event);
  };
};
