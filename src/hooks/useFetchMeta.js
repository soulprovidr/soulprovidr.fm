import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Actions from '../actions';

export default (interval = 5000) => {
  const dispatch = useDispatch();
  useEffect(() => {
    let timeout = null;
    (function fetchMeta() {
      dispatch(Actions.fetchMeta());
      timeout = setTimeout(fetchMeta, interval);
    })();
    return () => {
      clearTimeout(timeout);
    };
  });
}