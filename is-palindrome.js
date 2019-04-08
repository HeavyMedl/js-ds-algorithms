/**
 * Write a recursive function called `isPalindrome` which returns true if 
 * the string passed to it is a palindrome (reads the same forward and 
 * backward). Otherwise it returns false.
 *
 * @param {String} str
 * @returns {Boolean} Is the {@link str} a palidrome?
 */
function isPalindrome(str) {
  return str.length === 1 ?
    true : str[0] !== str[str.length - 1] ?
    false : isPalindrome(str.substring(1, str.length - 1))
}

console.log(isPalindrome('awesome')) // false
console.log(isPalindrome('foobar')) // false
console.log(isPalindrome('tacocat')) // true
console.log(isPalindrome('amanaplanacanalpanama')) // true
console.log(isPalindrome('amanaplanacanalpandemonium')) // false
