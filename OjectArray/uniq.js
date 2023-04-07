/**
 * 3.Uniq: Cho một mảng đầu vào, viết một function để loại bỏ các phần tử bị lặp trong mảng. Ví dụ [1, 2, 3, 2, 4] // => [1, 2, 3, 4]
 * @param {array} arr
 * @returns loại bỏ các phần tử bị lặp trong mảng
 */
function uniq(arr) {
  return [...new Set(arr)];
}
module.exports = uniq;
