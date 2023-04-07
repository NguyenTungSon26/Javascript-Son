const reverse = require("./reverses");

test("đảo ngược thứ tự phần tử trong mảng", () => {
  expect(reverse([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]);
});
test("đảo ngược thứ tự phần tử trong mảng", () => {
  expect(reverse(["a", "b", "c", "d", "e"])).toEqual(["e", "d", "c", "b", "a"]);
});
test("đảo ngược thứ tự phần tử trong mảng", () => {
  expect(reverse([-1, -2, -3])).toEqual([-3, -2, -1]);
});
test("đảo ngược thứ tự phần tử trong mảng", () => {
  expect(reverse([11, 2, 3, 7])).toEqual([7, 3, 2, 11]);
});
test("đảo ngược thứ tự phần tử trong mảng", () => {
  expect(reverse([0, "a", -3, "b", 5])).toEqual([5, "b", -3, "a", 0]);
});
