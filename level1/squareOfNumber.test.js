const squareOfNumber = require("./squareOfNumber");

test("squareOfNumber", () => {
  expect(squareOfNumber(2)).toBe(4);
});
test("squareOfNumber", () => {
  expect(squareOfNumber(5)).toBe(25);
});
test("squareOfNumber", () => {
  expect(squareOfNumber(25)).toBe(625);
});
test("squareOfNumber", () => {
  expect(squareOfNumber(6)).toBe(36);
});
test("squareOfNumber", () => {
  expect(squareOfNumber(255)).toBe(65025);
});
