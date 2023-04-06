const chunk = require("./chunk");

test("chunk", () => {
  expect(chunk(["a", "b", "c", "d"]), 2).toEqual(["a", "b"], ["c", "d"]);
});
// test("chunk", () => {
//   expect(chunk(-5)).toBe(25);
// });
// test("chunk", () => {
//   expect(chunk(0)).toBe(0);
// });
// test("chunk", () => {
//   expect(chunk(6)).toBe(36);
// });
// test("chunk", () => {
//   expect(chunk(255)).toBe(65025);
// });
