import parseISO from 'date-fns/parseISO';
import { useDispatch, useSelector } from 'react-redux';
import { setProgress, useMediaAction } from 'modules/player';
import { RadioUrl } from '../constants';
import { selectRadioMeta } from '../selectors';

export const usePlayRadio = () => {
  const dispatch = useDispatch();
  const radioMeta = useSelector(selectRadioMeta);
  const mediaAction = useMediaAction(RadioUrl, false);
  const callback = () => {
    const currentTime = new Date().valueOf();
    const startedAt = parseISO(radioMeta.started_at).valueOf();
    dispatch(setProgress(currentTime - startedAt));
  };
  return () =>
    mediaAction({
      ...radioMeta,
      callback,
      duration: radioMeta.duration * 1000
    });
};
