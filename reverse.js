/**
 * Write a recursive function called `reverse` which accepts
 * a string and returns a new string in reverse.</p >
 *
 * @param {String} str
 * @returns The {@link str} reversed
 */
function reverse(str) {
  return str.length === 0 ?
    "" : str[str.length - 1] + reverse(str.substring(0, str.length - 1))
}

console.log(reverse('awesome')) // 'emosewa'
console.log(reverse('rithmschool')) // 'loohcsmhtir'
