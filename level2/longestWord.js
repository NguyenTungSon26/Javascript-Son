/**
 * Write a program that takes a list of strings as input and returns the longest word in the list.
 * @param {string[]} words
 * @returns longest word in the list
 */
function longestWord(words) {
  let longest = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }
  return longest;
}
module.exports = longestWord;
