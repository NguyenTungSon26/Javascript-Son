const secondLargestNumber = require("./secondLargestNumber");

test("finds the second largest number in an array", () => {
  expect(secondLargestNumber([1, 2, 3, 4, 5])).toBe(4);
  expect(secondLargestNumber([10, 20, 30, 40, 50, 60])).toBe(50);
  expect(secondLargestNumber([-1, 0, 1, 2, 3, 4, 5])).toBe(4);
  expect(secondLargestNumber([100, 20, 300, 400, 500, 600])).toBe(500);
  expect(secondLargestNumber([0, 0, 0, 0, 0, 1])).toBe(0);
});
