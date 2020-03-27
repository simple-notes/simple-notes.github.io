import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

const cachedPush = history.push;

history.push = args => {
  if (typeof args === 'string') {
    return cachedPush(args);
  };
  if (args && args.state && args.state.animate) {
    args.state.animate().then(() => {
      delete args.state.animate;
      cachedPush(args);
    })
  } else {
    cachedPush(args);
  };
};

export default history;
