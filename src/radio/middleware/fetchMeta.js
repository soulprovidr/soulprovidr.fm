import fetchJson from '@/common/util/fetchJson';
import { updateMeta } from '../actions';
import { RadioMetaUrl } from '../constants';

export default (store) => {
  async function fetchMeta() {
    store.dispatch(updateMeta(await fetchJson(RadioMetaUrl)));
  }

  fetchMeta() && setInterval(fetchMeta, 5 * 1000);

  return (next) => (action) => next(action);
};
