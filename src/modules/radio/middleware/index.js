import { setProgressMiddleware } from './setProgress';
import { pollRadioMetaMiddleware } from './pollRadioMeta';

export default [pollRadioMetaMiddleware, setProgressMiddleware];
