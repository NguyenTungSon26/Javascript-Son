/**
 * Write a program that takes a list of numbers as input and returns the sum of the numbers that are divisible by both 3 and 5.
 * @param {numbers[]} numbers
 * @returns numbers that are divisible by both 3 and 5
 */
const sumDivisibleByThreeAndFive = (numbers) => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 3 === 0 && numbers[i] % 5 === 0) {
      sum += numbers[i];
    }
  }
  return sum;
};
module.exports = sumDivisibleByThreeAndFive;
