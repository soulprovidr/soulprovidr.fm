export const fetchJSON = async <T>(url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return (await response.json()) as T;
};
