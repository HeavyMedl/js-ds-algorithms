/**
 * Given an array of integers and a number, write a function 
 * called "console.log(maxSubarraySum", which finds the maximum sum of a 
 * subarray with the length of the number passed to the function.
 * 
 * Note that a subarray must consist of "consecutive" elements 
 * from the original array. In the first example below, 
 * [100, 200, 300] is a subarray of the original array, 
 * but [100, 300] is not.
 *
 * @param {Number[]} arr The array to pick sub arrays from
 * @param {Number} subArrLength The length of the sub array to pick
 *  from {@link arr}.
 * @returns
 */
function maxSubarraySum(arr, subArrLength) {
    // Short circuit case.
    if (subArrLength > arr.length) {
        return null
    }
    let max = 0;
    let temp = 0;
    // Sum up the first sub array.
    for (let i = 0; i < subArrLength; i++) {
        max += arr[i];
    }
    // The temporary register holds the first max.
    // Then its used to add and subtract from.
    temp = max;
    // Loop through the rest of the {@link arr}, attempting
    // to find the largest sum of each sub array. Use the
    // Sliding window pattern.
    for (let i = subArrLength; i < arr.length; i++) {
        // Start at the beginning of the next sub array (i = subArrayLength)
        // ex. maxSubarraySum([1,2,3,4,5,6], 3)
        //        i      temp = 6
        // [1,2,3,4,5,6]
        //  -     +      temp = 6 - 1 + 4 = 9
        // [1,2,3,4,5,6]
        //    -     +    temp = 9 - 2 + 5 = 12
        // [1,2,3,4,5,6]
        //      -     +  temp = 12 - 3 + 6 = 15
        // [1,2,3,4,5,6]
        // max = 15
        temp = temp - arr[i - subArrLength] + arr[i]
        max = Math.max(temp, max);
    }
    return max;
}

// console.log(maxSubarraySum([100, 200, 300, 400], 2)) // 700
// console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)) // 39
// console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)) // 5
// console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)) // 5
// console.log(maxSubarraySum([2, 3], 3)) // null
console.log(maxSubarraySum([1, 2, 3, 4, 5, 6], 3)) // 15