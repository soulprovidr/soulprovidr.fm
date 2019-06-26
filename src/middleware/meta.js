import Actions from '../actions';

const fetchMetaRequest = () => fetch(
  'https://www.radioking.com/widgets/api/v1/radio/210013/track/current'
);

export default ({ dispatch }) => next => action => {
  const { payload, type } = action;
  switch (type) {
    case 'FETCH_META':
      fetchMetaRequest()
        .then(response => response.json())
        .then(data => {
          dispatch(Actions.fetchMetaSuccess(data));
        });
      break;
    default:
      break;
  }
  next(action);
};