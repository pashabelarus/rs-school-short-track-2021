/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const ar1 = str.split('');
  const arr2 = [];
  let num = 1;
  for (let i = 0; i < ar1.length; i++) {
    if (String(ar1[i]) === String(ar1[i + 1])) {
      num++;
    } else {
      if (num === 1) {
        arr2.push(ar1[i]);
      } else {
        arr2.push(String(num) + ar1[i]);
      }
      num = 1;
    }
  }
  return arr2.join('');
}

module.exports = encodeLine;
