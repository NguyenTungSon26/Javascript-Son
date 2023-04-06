const sumDivisibleByThreeAndFive = require("./sumDivisibleByThreeAndFive");

test("numbers that are divisible by both 3 and 5", () => {
  expect(sumDivisibleByThreeAndFive([0, 2, 3, 5, 15])).toBe(15);
});
test("numbers that are divisible by both 3 and 5", () => {
  expect(sumDivisibleByThreeAndFive([0, 2, 3, 5, 15])).toBe(15);
});
test("numbers that are divisible by both 3 and 5", () => {
  expect(sumDivisibleByThreeAndFive([0, 15, 30, 5, 1])).toBe(45);
});
test("numbers that are divisible by both 3 and 5", () => {
  expect(sumDivisibleByThreeAndFive([0, 2, 3, 5, 5])).toBe(0);
});
test("numbers that are divisible by both 3 and 5", () => {
  expect(sumDivisibleByThreeAndFive([0, 2, 3, 5, 30])).toBe(30);
});
