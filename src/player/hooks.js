import React from 'react';
import { useSelector } from 'react-redux';

export function usePlayerState() {
  return useSelector(state => state.player);
}