/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const count = {};
  for (let i = 0; i < domains.length; i++) {
    const arr = domains[i].split('.').reverse();
    let str = '';
    for (let j = 0; j < arr.length; j++) {
      str += `.${arr[j]}`;
      if (Object.prototype.hasOwnProperty.call(count, str)) {
        count[str]++;
      } else {
        count[str] = 1;
      }
    }
  }
  return count;
}

module.exports = getDNSStats;
