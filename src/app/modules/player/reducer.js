import { ActionTypes } from "./actions";

const initialState = {
  isPlaying: false,
  volume: 100
};

export default function reducer(state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
    case ActionTypes.PAUSE:
      return {
        ...state,
        isPlaying: false
      };
    case ActionTypes.PLAY:
      return {
        ...state,
        isPlaying: true
      };
    case ActionTypes.SET_VOLUME:
      return {
        ...state,
        volume: payload
      };
    default:
      return state;
  }
}