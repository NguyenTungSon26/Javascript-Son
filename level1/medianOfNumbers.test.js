const medianOfNumber = require("./medianOfNumbers");

test("median of Number", () => {
  const arr = [1, 2, 4];
  expect(medianOfNumber(arr)).toBe(2);
});
test("median of Number", () => {
  const arr = [1, 2, 4, 5];
  expect(medianOfNumber(arr)).toBe(2);
});
test("median of Number", () => {
  const arr = [1, 2, 4, 5, 6];
  expect(medianOfNumber(arr)).toBe(3);
});
test("median of Number", () => {
  const arr = [1, 2, 4, 5, 6, 8];
  expect(medianOfNumber(arr)).toBe(3);
});
test("median of Number", () => {
  const arr = [1, 2, 4, 5, 6, 8, 9];
  expect(medianOfNumber(arr)).toBe(4);
});
