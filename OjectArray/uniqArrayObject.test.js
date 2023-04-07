const uniqArrayObject = require("./uniqArrayObject");

test("UniqArrayObject", () => {
  expect(
    uniqArrayObject([
      { x: 1, y: 2 },
      { x: 2, y: 1 },
      { x: 1, y: 2 },
    ])
  ).toEqual([
    { x: 1, y: 2 },
    { x: 2, y: 1 },
  ]);
});
