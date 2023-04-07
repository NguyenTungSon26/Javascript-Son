/**
 * 4.	UniqArrayObject: Giống Uniq nhưng mở rộng cho 1 collection, Ví dụ:
a.	[{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }] 
b.	// => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]

 * @param {Array} arr 
 * @returns 
 */
function uniqArrayObject(arr) {
  const seen = {};
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const obj = arr[i];
    const key = JSON.stringify(obj);
    if (!seen[key]) {
      result.push(obj);
      seen[key] = true;
    }
  }
  return result;
}
module.exports = uniqArrayObject;
