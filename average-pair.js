/**
 * Write a function called "averagePair". Given a sorted 
 * array of integers and a target average, determine if 
 * there is a pair of values in the array where the average
 * of the pair equals the target average. There may be more 
 * than one pair that matches the average target.
 * 
 * Time: O(N^2)
 *
 * @param {Number[]} arr
 * @param {Number} targetAverage
 * @returns
 */
function averagePair(arr, targetAverage) {
    // Short circuit for invalid cases
    if (typeof targetAverage === "undefined" ||
        !arr || arr && arr.length === 0) {
        return false;
    }
    let leftPointer = 0;
    let rightPointer = 1;
    // Loop through the array
    while (leftPointer < arr.length) {
        // If the rightPointer isn
        if (rightPointer < arr.length && rightPointer != leftPointer) {
            let average = (arr[leftPointer] + arr[rightPointer]) / 2;
            if (average === targetAverage) {
                return true;
            }
        }
        // Right pointer as reached the end, we'll increment
        // leftPointer to check the next pairs
        if (rightPointer == arr.length - 1) {
            ++leftPointer
            // Reset the right pointer
            rightPointer = 0;
        } else {
            // If its not at the end, increment the right pointer
            // so we can continue checking.
            ++rightPointer;
        }
    }
    return false;
}

console.log(averagePair([1, 2, 3], 2.5)) // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)) // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)) // false
console.log(averagePair([], 4)) // false