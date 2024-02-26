export const fetchJson = async <T>(url: string, options: RequestInit = {}) => {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return (await response.json()) as T;
};

export const prettyPrintMilliseconds = (ms) => {
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
