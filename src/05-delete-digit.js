/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr1 = n.toString().split('');
  const arr2 = Array.from(arr1);
  const count = arr1.sort((a, b) => a - b)[0];
  arr2.splice(arr2.indexOf(count), 1);
  return Number(arr2.join(''));
}

module.exports = deleteDigit;
