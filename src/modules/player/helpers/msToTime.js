// https://stackoverflow.com/a/9763769
export const msToTime = (ms) => {
  if (ms === null) {
    return '--:--:--';
  }
  // Pad to 2 or 3 digits, default is 2
  const pad = (n, z = 2) => ('00' + n).slice(-z);
  return (
    pad((ms / 3.6e6) | 0) +
    ':' +
    pad(((ms % 3.6e6) / 6e4) | 0) +
    ':' +
    pad(((ms % 6e4) / 1000) | 0)
  );
};
