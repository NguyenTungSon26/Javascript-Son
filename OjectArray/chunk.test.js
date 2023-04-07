const chunk = require("./chunk");

test("chia đều mảng theo số phần chỉ định", () => {
  expect(chunk(["a", "b", "c", "d"], 1)).toEqual([["a"], ["b"], ["c"], ["d"]]);
});
test("chunk", () => {
  expect(chunk(["a", "b", "c", "d"], 2)).toEqual([
    ["a", "b"],
    ["c", "d"],
  ]);
});
test("chunk", () => {
  expect(chunk([1, 2, "c", "d"], 3)).toEqual([[1, 2, "c"], ["d"]]);
});
test("chunk", () => {
  expect(chunk([-1, "b", 0, "d"], 3)).toEqual([[-1, "b", 0], ["d"]]);
});
test("chunk", () => {
  expect(chunk([2, 4, 6, 8], 1)).toEqual([[2], [4], [6], [8]]);
});
