/**
 * Write a recursive function called `capitalizeFirst`. Given an array of 
 * strings, capitalize the first letter of each string in the array.
 *
 * @param {String[]} strArr
 * @returns {String[]} The strings whose first letter is capitalized
 */
function capitalizeFirst(strArr) {
  return strArr.length === 0 ? [] : [
      strArr[0].split('')[0].toUpperCase()
      .concat(strArr[0].slice(1))
    ]
    .concat(capitalizeFirst(strArr.slice(1)))
}

console.log(capitalizeFirst(['car', 'taco', 'banana']));
// ['Car','Taco','Banana']
