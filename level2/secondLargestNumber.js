/**
 * Write a program that takes a list of numbers as input and returns the second largest number in the list.
 * @param {numbers[]} numbers
 * @returns second largest number in the list
 */
function secondLargestNumber(numbers) {
  numbers.sort((a, b) => b - a);
  return numbers[1];
}

module.exports = secondLargestNumber;
