/**
 * Write a recursive function called `nestedEvenSum`. Return the sum of all 
 * even numbers in an object which may contain nested objects.
 *
 * @param {Object} obj 
 * @returns {Number} The sum of all even numbers in an {@link object} with 
 * nested objects
 */
function nestedEvenSum(obj) {
  let sum = 0;

  function helper(obj, total) {
    for (const prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        const value = obj[prop];
        if (!isNaN(value) && value % 2 === 0) {
          total += value;
        } else if (typeof value === 'object') {
          total = helper(value, total)
        }
      }
    }
    return total;
  }
  sum = helper(obj, sum)
  return sum;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: {
    b: 2,
    bb: {
      b: 3,
      bb: {
        b: 2
      }
    }
  },
  c: {
    c: {
      c: 2
    },
    cc: 'ball',
    ccc: 5
  },
  d: 1,
  e: {
    e: {
      e: 2
    },
    ee: 'car'
  }
};

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10
