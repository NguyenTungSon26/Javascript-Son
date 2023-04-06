/**
 * 1.6.	Write a program that takes a list of numbers as input and sorts the list in ascending order.
 * @param {number[]} arr
 * @returns array order
 */
function sort(arr) {
  return arr.sort((i, j) => i - j);
}
module.exports = sort;
