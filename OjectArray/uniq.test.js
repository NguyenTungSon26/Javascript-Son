const uniq = require("./uniq");

test("để loại bỏ các phần tử bị lặp trong mảng", () => {
  expect(uniq([1, 2, 3, 2, 4])).toEqual([1, 2, 3, 4]);
});
test("để loại bỏ các phần tử bị lặp trong mảng", () => {
  expect(uniq([1, 2, 3, 2, 4])).toEqual([1, 2, 3, 4]);
});
test("để loại bỏ các phần tử bị lặp trong mảng", () => {
  expect(uniq(["a", "b", "c", "c", "d"])).toEqual(["a", "b", "c", "d"]);
});
test("để loại bỏ các phần tử bị lặp trong mảng", () => {
  expect(uniq([1, 2, 3, 2, 3, 4])).toEqual([1, 2, 3, 4]);
});
test("để loại bỏ các phần tử bị lặp trong mảng", () => {
  expect(uniq([1, 2, 3, 2, 4])).toEqual([1, 2, 3, 4]);
});
