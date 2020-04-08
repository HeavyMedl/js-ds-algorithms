/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable no-restricted-syntax */

function maxSubarraySum(arr, n) {
  if (arr.length < n) return null;
  let max = 0;
  // sum the first n numbers of the array. This is the first max
  for (let i = 0; i < n; i++) {
    max += arr[i];
  }
  // set a storage value to hold the first sum we computed.
  let sum = max;
  // start the loop at n, as we already computed the sum up to n.
  for (let i = n; i < arr.length; i++) {
    sum = sum - arr[i - n] + arr[i];
    max = Math.max(max, sum);
  }
  return max;
}

maxSubarraySum([1, 2, 3], 3);

// isSubsequence("hello", "hello world") // true
function isSubsequence(str1, str2) {
  let i = 0;
  let j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}

function averagePair(arr, target) {
  if (arr.length === 0) return false;
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    const average = (arr[start] + arr[end]) / 2;
    if (average === target) {
      return true;
    }
    if (average < target) {
      start++;
    } else {
      end--;
    }
  }
  return false;
}

// console.log(averagePair([1, 2, 3], 2.5));
// console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));

function areThereDuplicates(...params) {
  const freq = {};
  for (const elem of params) {
    freq[elem] = ++freq[elem] || 1;
    if (freq[elem] > 1) {
      return true;
    }
  }
  return false;
}

function sameFrequency(num1, num2) {
  const str1 = num1.toString();
  const str2 = num2.toString();
  const freq = {};

  if (str1.length !== str2.length) return false;

  for (const char of str1) {
    freq[char] = ++freq[char] || 1;
  }

  for (const char of str2) {
    if (!freq[char] || freq[char] === 0) {
      return false;
    }
    freq[char]--;
  }

  return true;
}

// Multiple pointers
function countUniqueValues(arr) {
  // if the arr is empty or 1, return length which represents unique vals
  if (arr.length < 2) return arr.length;
  // create 2 pointers, starting at the 0th index and 1 at index 1.
  // if arr[i] = arr[j], move j up 1 and start again
  // if arr[i] != arr[j], move i up 1 and set arr[i] = arr[j]
  // return pointer i + 1
  let i = 0;
  let j = 1;
  // [1, 2]
  while (j < arr.length) {
    if (arr[i] === arr[j]) {
      j += 1;
    } else if (arr[i] !== arr[j]) {
      i += 1;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}
// console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
// console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));

// Frequency counter
function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  const freq = {};
  for (const char of str1) {
    freq[char] = ++freq[char] || 1;
  }
  for (const char of str2) {
    // if frequency of char in freq is less than 1, return false,
    // otherwise subtract 1
    if (!freq[char] || freq[char] === 0) {
      return false;
    }
    --freq[char];
  }
  return true;
}

// console.log(validAnagram('abcd', 'cbad'));
