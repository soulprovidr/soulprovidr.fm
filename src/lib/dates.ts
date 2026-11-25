// Dates are written as YYYY-MM-DD and treated as calendar days (no time zone),
// so the server and the browser always render the same thing.

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const parse = (date: string) => {
  const [year, month, day] = date.split("-").map(Number);
  return { year, month, day };
};

/** "November 18, 2026" */
export const formatDate = (date: string) => {
  const { year, month, day } = parse(date);
  return `${MONTHS[month - 1]} ${day}, ${year}`;
};

/** "Nov 18" */
export const formatShortDate = (date: string) => {
  const { month, day } = parse(date);
  return `${MONTHS[month - 1].slice(0, 3)} ${day}`;
};

/** "November 2026" */
export const formatMonth = (date: string) => {
  const { year, month } = parse(date);
  return `${MONTHS[month - 1]} ${year}`;
};
