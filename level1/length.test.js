const length = require("./length");

test("length", () => {
  const str = "How are you";
  expect(length(str)).toBe(11);
});
test("length", () => {
  const str = "";
  expect(length(str)).toBe(0);
});
test("length", () => {
  const str = "@#$%";
  expect(length(str)).toBe(4);
});
test("length", () => {
  const str = "Hello World";
  expect(length(str)).toBe(11);
});
test("length", () => {
  const str =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
  expect(length(str)).toBe(74);
});
