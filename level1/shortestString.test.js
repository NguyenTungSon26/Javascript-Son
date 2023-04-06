const shortestString = require("./shortestString");

test("shortest string in the list", () => {
  const strings = ["hello", "world", "how", "are", "you"];
  expect(shortestString(strings)).toBe("how");
});

test("shortest string in the list", () => {
  const strings = ["hello", "world", "and", "world", "hello"];
  expect(shortestString(strings)).toBe("and");
});

test("shortest string in the list", () => {
  const strings = ["hello", "world", "", "are", "you"];
  expect(shortestString(strings)).toBe("");
});

test("shortest string in the list", () => {
  const strings = ["hello", "world", "ab", "are", "you"];
  expect(shortestString(strings)).toBe("ab");
});

test("shortest string in the list", () => {
  const strings = ["hello", "world", "you", "how", "you"];
  expect(shortestString(strings)).toBe("you");
});
