export const fetchJSON = async (url: string) => {
  const response = await fetch(url);
  return await response.json();
};
