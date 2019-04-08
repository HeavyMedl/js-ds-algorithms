/**
 * Multiple Pointers Pattern
 *
 * Implement a function called countUniqueValues, 
 * which accepts a sorted array, and counts the 
 * unique values in the array. There can be negative 
 * numbers in the array, but it will always be sorted.
 * 
 * BONUS: You must do this with constant or O(1) space
 *  and O(N) time.
 * 
 * ex.
 * countUniqueValues([1,1,1,1,2]) // 2
 * countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
 * countUniqueValues([]) // 0
 * countUniqueValues([-2,-1,-1,0,1]) // 4
 *
 * @param {Number[]} arr The sorted array of numbers to count
 * @return {Number} The number of unique values
 */
function countUniqueValues(arr) {
    // There is at least one unique value 
    let uniqueValues = 0;
    let tempRegister = 0;
    // Loop through the sorted array. For each iteration..
    for (let i = 0; i < arr.length; i++) {
        if (i === 0) {
            // Set the temporary register to hold the first
            // value for the next comparison.
            tempRegister = arr[i];
            // Since we know there's at least one unique value,
            // we can increment by one.
            ++uniqueValues;

        } else if (arr[i] === tempRegister) {
            // When the arr[i] is the same as the tempRegister,
            // we continue without doing anything
            continue;
        } else {
            // Otherwise, we increment the uniqueValues
            ++uniqueValues;
            // And now set the tempRegister to the new value and repeat
            tempRegister = arr[i];
        }
    }
    return uniqueValues;
}

console.log(countUniqueValues([1, 1, 1, 1, 2])) // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])) // 7
console.log(countUniqueValues([])) // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])) // 4

/**
 * Different solution using a while loop.
 *
 * @param {Number[]} arr
 * @returns {Number}
 */
function countUniqueValuesAlt(arr) {
    // We have at least one unique value when the
    // array is larger than 0.
    let uniqueValues = arr.length > 0 ? 1 : 0;
    let leftPointer = 0;
    let rightPointer = 1;
    while (rightPointer < arr.length) {
        if (arr[leftPointer] !== arr[rightPointer]) {
            // When they're different, we have a unique 
            // value. Increment the count.
            ++uniqueValues;
        }
        // Increment the pointers.
        ++leftPointer;
        ++rightPointer;
    }
    return uniqueValues;
}

console.log(countUniqueValuesAlt([1, 1, 1, 1, 2])) // 2
console.log(countUniqueValuesAlt([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])) // 7
console.log(countUniqueValuesAlt([])) // 0
console.log(countUniqueValuesAlt([-2, -1, -1, 0, 1])) // 4