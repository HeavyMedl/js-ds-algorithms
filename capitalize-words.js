/**
 * Write a recursive function called `capitalizeWords`. Given an array of 
 * words, return a new array containing each word capitalized.
 *
 * @param {String[]} strArr
 * @returns {String[]} All the {@link strArr} words, capitilized
 */
function capitalizeWords(strArr) {
  return strArr.length === 0 ? [] : [strArr[0].toUpperCase()]
    .concat(capitalizeWords(strArr.slice(1)))
}

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']

function itCap(strArr) {
  let result = [];
  for (const str of strArr) {
    result.push(str.toUpperCase())
  }
  return result;
}

console.log(itCap(words))
