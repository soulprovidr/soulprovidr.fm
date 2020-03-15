import React, { useContext } from 'react';
import { createSlice } from '@reduxjs/toolkit';
import PlayerStore from './store';

export const PlayerStatus = {
  UNSTARTED: -1,
  BUFFERING: 0,
  PLAYING: 1,
  PAUSED: 2,
  ENDED: 3,
  STOPPED: 4
};

const {
  UNSTARTED,
  BUFFERING,
  PLAYING,
  PAUSED,
  ENDED,
  STOPPED
} = PlayerStatus;

const initialState = {
  duration: null,
  meta: {},
  progress: null,
  status: UNSTARTED,
  src: null
};

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    play: {
      reducer(state, action) {
        
      },
      prepare(src = null, meta = null) {
        if (!src && !meta) {
          return 
        }
        return { payload: { src } }
      }
    }
  }
})

const PlayerContext = React.createContext(null);

export const PlayerStoreProvider = ({ children }) => (
  <PlayerContext.Provider value={PlayerStore}>
    {children}
  </PlayerContext.Provider>
);

export const usePlayerStore = () => {
  const store = useContext(PlayerContext);
  if (!store) {
    throw new Error('usePlayerStore must be used within a PlayerStoreProvider.')
  }
  return store;
};