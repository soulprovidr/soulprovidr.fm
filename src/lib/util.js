export const isEmpty = (obj) => Object.keys(obj).length === 0;

export const msToTime = (ms) => {
  // Pad to 2 or 3 digits, default is 2
  if (!ms) {
    return "--:--";
  }
  const pad = (n, z = 2) => ("00" + n).slice(-z);
  return (
    // pad((ms / 3.6e6) | 0) +
    // ":" +
    pad(((ms % 3.6e6) / 6e4) | 0) + ":" + pad(((ms % 6e4) / 1000) | 0)
  );
};

export const noop = () => undefined;

export const pick = (obj, keys = []) => {
  let pickObj = {};
  for (const [key, val] of Object.entries(obj)) {
    if (keys.includes(key)) {
      pickObj[key] = val;
    }
  }
  return pickObj;
};
