const trimAll = require("./trimAll");

test("loại bỏ tất cả khoảng trắng đầu và cuối của một chuỗi bất kỳ", () => {
  expect(trimAll("    Hello     world    ")).toBe("Hello world");
});
test("loại bỏ tất cả khoảng trắng đầu và cuối của một chuỗi bất kỳ", () => {
  expect(trimAll("   I    am    good      ")).toBe("I am good");
});
test("loại bỏ tất cả khoảng trắng đầu và cuối của một chuỗi bất kỳ", () => {
  expect(trimAll("Hello     world  Javascript  ")).toBe(
    "Hello world Javascript"
  );
});
test("loại bỏ tất cả khoảng trắng đầu và cuối của một chuỗi bất kỳ", () => {
  expect(trimAll("Helloworld  NodeJs  ")).toBe("Helloworld NodeJs");
});
test("loại bỏ tất cả khoảng trắng đầu và cuối của một chuỗi bất kỳ", () => {
  expect(trimAll("Hello     my Son  ")).toBe("Hello my Son");
});
