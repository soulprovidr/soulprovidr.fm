/**
 * Take the average of an array of numbers.
 *
 * @param {Array<Number>} array
 * @returns
 */
export default function average(array) {
  return array.reduce((total, value) => total + value, 0) / array.length;
}
