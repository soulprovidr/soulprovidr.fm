import { createEffect } from "solid-js";
import { createStore } from "solid-js/store";
import { pick } from "./util";

export const createLocalStore = (defaultState, persistKeys = []) => {
  const [state, setState] = createStore(defaultState);
  if (localStorage.radio) setState(JSON.parse(localStorage.radio));
  createEffect(() => {
    if (persistKeys.length) {
      localStorage.radio = JSON.stringify(pick(state, persistKeys));
    }
  });
  return [state, setState];
};
