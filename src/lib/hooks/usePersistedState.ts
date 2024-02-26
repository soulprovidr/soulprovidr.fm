import { Dispatch, SetStateAction, useEffect, useState } from "react";

function getLocalStorageItem(key: string) {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch {
    return undefined;
  }
}

function setLocalStorageItem(key: string, value: any) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.warn(e?.message);
  }
}

export const usePersistedState = <T>(key: string, v: T) => {
  const [value, setValue] = useState<T>(getLocalStorageItem(key) || v);
  useEffect(() => {
    setLocalStorageItem(key, value);
  }, [value]);
  return [value, setValue] as [T, Dispatch<SetStateAction<T>>];
};
