const maxNumber = require("./maxNumber");

test("largest number in the list", () => {
  const arr = [5, 1, 2, 6, 8];
  const max1 = maxNumber(arr);
  expect(max1).toBe(8);
});
test("largest number in the list", () => {
  const arr = [5, 1, 2, 6, 10];
  const max1 = maxNumber(arr);
  expect(max1).toBe(10);
});
test("largest number in the list", () => {
  const arr = [5, 1, 2, 6, 11];
  const max1 = maxNumber(arr);
  expect(max1).toBe(11);
});
test("largest number in the list", () => {
  const arr = [5, 21, 2, 6, 8];
  const max1 = maxNumber(arr);
  expect(max1).toBe(21);
});
test("largest number in the list", () => {
  const arr = [5, 1, 22, 6, 8];
  const max1 = maxNumber(arr);
  expect(max1).toBe(22);
});
