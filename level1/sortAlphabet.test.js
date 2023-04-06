const sortAlphabet = require("./sortAlphabet");

test("sort Alphabet", () => {
  const str = ["dog", "cat", "bird"];
  expect(sortAlphabet(str)).toEqual(["bird", "cat", "dog"]);
});
test("sort Alphabet", () => {
  const str = ["apple", "orange", "peace"];
  expect(sortAlphabet(str)).toEqual(["apple", "orange", "peace"]);
});
test("sort Alphabet", () => {
  const str = ["nguyen", "tung", "son"];
  expect(sortAlphabet(str)).toEqual(["nguyen", "son", "tung"]);
});
test("sort Alphabet", () => {
  const str = ["aaa", "ccc", "bbb"];
  expect(sortAlphabet(str)).toEqual(["aaa", "bbb", "ccc"]);
});
test("sort Alphabet", () => {
  const str = ["hello", "world", "my"];
  expect(sortAlphabet(str)).toEqual(["hello", "my", "world"]);
});
