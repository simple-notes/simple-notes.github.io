import debounce from 'lodash/debounce';
import { defaultDebounceTimeMs } from '../config'

export const debounceEvent = (func, timeout = defaultDebounceTimeMs) => {
  return debounce(func, timeout);
};
