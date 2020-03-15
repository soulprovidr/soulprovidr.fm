import React, { useContext } from 'react';
import PlayerStore from './store';

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