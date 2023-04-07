/**
 * 6.	TrimAll: Viết function loại bỏ tất cả khoảng trắng đầu và cuối của một chuỗi bất kỳ, nếu có khoảng trắng ở giữa chuỗi đó thì chỉ giữ lại một khoảng trắng. VD: “    hello     world    “ => “hello world" 
1. “   I    am    good      “ => “I am good”

 * @param {string} str
 * @returns loại bỏ tất cả khoảng trắng đầu và cuối của một chuỗi bất kỳ, nếu có khoảng trắng ở giữa chuỗi đó thì chỉ giữ lại một khoảng trắng
 */
function trimAll(str) {
  str = str.trim();
  let result = "";
  let prevChar = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === " " && prevChar === " ") {
      continue;
    }
    result += str[i];
    prevChar = str[i];
  }

  return result;
}
module.exports = trimAll;
