import Actions from '../actions';

const likeRequest = () => fetch(
  'https://www.radioking.com/api/radio/210013/track/vote', {
  method: 'POST',
  mode: 'no-cors',
  cache: 'no-cache',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  body: JSON.stringify({ vote: 1 })
});

export default ({ dispatch }) => next => action => {
  const { payload, type } = action;
  switch (type) {
    case 'LIKE':
      if (!payload.id) break;
      likeRequest().then(() => {
        dispatch(Actions.likeSuccess(payload.id));
      });
      break;
    default:
      break;
  }
  next(action);
};