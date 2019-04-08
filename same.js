/**
 * Write a function called "same", which accepts two arrays. 
 * The function should return true if every value in the array
 * has it's corresponding value squared in the second array. The
 * frequency of the values must be the same.
 *
 * same([1,2,3], [4,1,9])  // => true
 * same([1,2,3], [1,9])    // => false
 * same([1,2,1], [4,4,1])  // => false (must be same frequency)
 * 
 * @param {Number[]} arr
 * @param {Number[]} squaredArray
 * @return {Boolean} Is every value in the array have a corresponding
 *  value squared in the second array?
 */
function same(arr, squaredArray) {
  // If the lengths don't match, they aren't the same.
  if (arr.length !== squaredArray.length) {
    return false;
  }
  // Create a map
  let obj = {};
  // Create a boolean to return
  let isSame = true;
  // Populate the map
  // Loop through {@link arr}, for each number..
  arr.forEach(num => {
    // Square the number
    let squaredNum = Math.pow(num, 2);
    // If it exists in the obj, increment the count,
    // else set the count to 1
    obj[squaredNum] = ++obj[squaredNum] || 1;
  });
  // Loop through {@link squaredArray}, for each number
  squaredArray.forEach(squaredNumber => {
    // If the squaredNumber exists in the obj...
    if (obj.hasOwnProperty(squaredNumber)) {
      // If the count of the squaredNumber in the obj is greater than 0
      if (obj[squaredNumber] > 0) {
        --obj[squaredNumber];
      } else {
        // There was at least one more of thi squared number than in the obj.
        isSame = false;
      }
    } else {
      // If the squaredNumber doesn't exist in the obj, 
      // we don't have the corresponding squared number.
      isSame = false;
    }
  });
  return isSame;
}
