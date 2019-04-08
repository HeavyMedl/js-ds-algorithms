/**
 * Write a function called `binarySearch` which accepts a `sorted` array and a
 * value and returns the index at which the value exists. Otherwise, return -1.
 *
 * @param {*[]} sortedArr
 * @param {*} val
 * @return {Number}
 */
function binarySearch(sortedArr, val) {
  let leftPointer = 0;
  let rightPointer = sortedArr.length - 1;
  while (leftPointer <= rightPointer) {
    const middle = leftPointer + Math.floor((rightPointer - leftPointer) / 2);
    const middleVal = sortedArr[middle];
    // console.log('Iteration: ' + count)
    // console.log('Setting middle index: ' + middle)
    // console.log('Middle value: ' + middleVal)
    if (val === middleVal) {
      return middle;
    } else if (val > middleVal) {
      // If val is greater than middle val,
      // set the left pointer to middle + 1
      leftPointer = middle + 1;
    } else if (val < middleVal) {
      // The val is less than middle val.
      // set right pointer to middle - 1
      rightPointer = middle - 1;
    }
  }
  return -1;
}
// Searching for 6
//
// l0 m1
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//          r3

// console.log(binarySearch([1, 2, 3, 4, 5], 2)); // 1
// console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
// console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 4
// console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1
// console.log(binarySearch(
//     [5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40,
//       44, 64, 79, 84, 86, 95, 96, 98, 99,
//     ], 10)); // 2
// console.log(binarySearch(
//     [5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40,
//       44, 64, 79, 84, 86, 95, 96, 98, 99,
//     ], 95)); // 16
// console.log(binarySearch(
//     [5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40,
//       44, 64, 79, 84, 86, 95, 96, 98, 99,
//     ], 100)); // -1


// Refactored
/**
 * Binary search refactored
 *
 * @param {*} sortedArr
 * @param {*} target
 * @return {Number}
 */
function binarySearchRefactor(sortedArr, target) {
  let start = 0;
  const end = 0;
  const middle = Math.floor((start + end) / 2);
  while (sortedArr[middle] !== target && start <= end) {
    if (sortedArr[middle] === target) {
      return middle;
    } else if (sortedArr[middle] > target) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  return sortedArr[middle] === target ? middle : -1;
}


console.log(binarySearchRefactor([1, 2, 3, 4, 5], 2)); // 1
console.log(binarySearchRefactor([1, 2, 3, 4, 5], 3)); // 2
console.log(binarySearchRefactor([1, 2, 3, 4, 5], 5)); // 4
console.log(binarySearchRefactor([1, 2, 3, 4, 5], 6)); // -1
console.log(binarySearchRefactor(
    [5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40,
      44, 64, 79, 84, 86, 95, 96, 98, 99,
    ], 10)); // 2
console.log(binarySearchRefactor(
    [5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40,
      44, 64, 79, 84, 86, 95, 96, 98, 99,
    ], 95)); // 16
console.log(binarySearchRefactor(
    [5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40,
      44, 64, 79, 84, 86, 95, 96, 98, 99,
    ], 100)); // -1
