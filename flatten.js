/**
 * Write a recursive function called `flatten` which accepts an array of 
 * arrays and returns a new array with all values flattened.
 *
 * @param {Array[]} arr
 * @returns {Array}
 */
function flatten(arr) {
  return arr.length === 0 ? [] : Array.isArray(arr[0]) ?
    flatten(arr[0]).concat(flatten(arr.slice(1))) : [arr[0]].concat(flatten(arr.slice(1)))
}

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3
