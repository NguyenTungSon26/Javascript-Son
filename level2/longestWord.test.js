const longestWord = require("./longestWord");

test("longest word in the list", () => {
  expect(longestWord(["apple", "orange", "kiwi"])).toBe("orange");
});
test("longest word in the list", () => {
  expect(longestWord(["pink", "blue", "yellow"])).toBe("yellow");
});
test("longest word in the list", () => {
  expect(longestWord(["lion", "dog", "mouse"])).toBe("mouse");
});
test("longest word in the list", () => {
  expect(longestWord(["hello", "world", "javascript"])).toBe("javascript");
});
test("longest word in the list", () => {
  expect(longestWord(["car", "bike", "train", "plane"])).toBe("train");
});
