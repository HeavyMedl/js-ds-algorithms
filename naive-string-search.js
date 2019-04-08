/**
 * Count the occurrences of the {@link substring} in the {@link str}.
 *
 * @param {String} substring
 * @param {String} str
 * @return {Number}
 */
function naiveStringSearch(substring, str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < substring.length; j++) {
      const subChar = substring[j];
      if (str[i + j] === subChar) {
        if (j === substring.length - 1) {
          count++;
        } else {
          continue;
        }
      }
      break;
    }
  }
  return count;
}

console.log(naiveStringSearch('omg', 'zomgzomgzomgmg')); // 3
