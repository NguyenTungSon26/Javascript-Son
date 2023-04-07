/**
 * 2.	Chunk: Cho một mảng đầu vào, viết một function để chia đều mảng theo số phần chỉ định. Ví dụ: ['a', 'b', 'c', 'd']
a.	chunk(['a', 'b', 'c', 'd'], 2); // => [['a', 'b'], ['c', 'd']]
b.	chunk(['a', 'b', 'c', 'd'], 3); // => [['a', 'b', 'c'], ['d']]

 * @param {string, number} arr
 * @param {number} size
 * @returns
 */
function chunk(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}
module.exports = chunk;
