# Problem Solving Approach

Here is a systematic way of approaching a problem that can help you think
through all of the variables you'll need for setting up the problem,
solving the problem, and refactoring your solution.

- [Problem Solving Approach](#problem-solving-approach)
  - [Understand the Problem](#understand-the-problem)
    - [Can I restate the problem in my own words?](#can-i-restate-the-problem-in-my-own-words)
    - [What are the inputs that go into the problem?](#what-are-the-inputs-that-go-into-the-problem)
    - [What are the outputs that should come from the solution to the problem?](#what-are-the-outputs-that-should-come-from-the-solution-to-the-problem)
    - [Can the outputs be determined from the inputs?](#can-the-outputs-be-determined-from-the-inputs)
    - [How should I label the important pieces of data that are part of the problem?](#how-should-i-label-the-important-pieces-of-data-that-are-part-of-the-problem)
  - [Explore Concrete Examples](#explore-concrete-examples)
    - [Start with simple examples](#start-with-simple-examples)
    - [Progress with more complex examples](#progress-with-more-complex-examples)
    - [Explore examples with empty inputs](#explore-examples-with-empty-inputs)
    - [Explore examples with invalid inputs](#explore-examples-with-invalid-inputs)
  - [Break It Down: Explicitely write out the steps you need to take](#break-it-down-explicitely-write-out-the-steps-you-need-to-take)
    - [Write out the skeleton of the function first](#write-out-the-skeleton-of-the-function-first)
    - [Elaborate](#elaborate)
    - [Elaborate More](#elaborate-more)
  - [Solve/Simplify](#solvesimplify)
    - [Find the core difficulty in what you're trying to do](#find-the-core-difficulty-in-what-youre-trying-to-do)
    - [Temporarily ignore that difficulty](#temporarily-ignore-that-difficulty)
    - [Write a simplified solution](#write-a-simplified-solution)
    - [Then incorporate that difficulty back in](#then-incorporate-that-difficulty-back-in)
  - [Look Back and Refactor](#look-back-and-refactor)
    - [Can you check the result](#can-you-check-the-result)
    - [Can you derive the result differently](#can-you-derive-the-result-differently)
    - [Can you understand it at a glance](#can-you-understand-it-at-a-glance)
    - [Can you use the result or method for some other problem](#can-you-use-the-result-or-method-for-some-other-problem)
    - [Can you improve the performance of your solution](#can-you-improve-the-performance-of-your-solution)
    - [Can you think of other ways to refactor](#can-you-think-of-other-ways-to-refactor)
    - [How have other people solved this problem](#how-have-other-people-solved-this-problem)

## Understand the Problem

> "Write a function that takes 2 numbers and returns their sum"

### Can I restate the problem in my own words?

So for this problem I need to create a function that takes two numbers, adds them together, and returns that sum.

### What are the inputs that go into the problem?

Are we adding integers or decimals? Can we add an integer and a decimal? Does it matter?

### What are the outputs that should come from the solution to the problem?

The output should be a integer.

### Can the outputs be determined from the inputs?

In other words, do I have enough information to solve the problem? (You may not be able to answer this question until you set about solving the problem. That's okay; it's still worth considering the question at this early stage).

What to do about inputs that are null, undefined, empty, etc. What if nothing is passed to the function.

### How should I label the important pieces of data that are part of the problem?

Function name, parameters, result.

## Explore Concrete Examples

> "Write a function which takes in a string and returns counts of each character in the string"

### Start with simple examples

```javascript
charCount('aaaa'); // => {a:4}
charCount('hello'); // => {h:1, e:1, l:2, o:1}
```

### Progress with more complex examples

```javascript
charCount('My phone number is 1234123'); // Do we care about case? Numbers?
charCount('da;flkje333'); // Do we care about non-alphanumeric?
```

### Explore examples with empty inputs

```javascript
charCount(); // Returns empty object? Returns undefined?
charCount(''); // Same as above
```

### Explore examples with invalid inputs

```javascript
charCount(1); // Returns undefined?
charCount({}); // Same?
```

## Break It Down: Explicitely write out the steps you need to take

### Write out the skeleton of the function first

```javascript
function charCount(str) {
  // Do something
  // Return an object with keys that are lowercase alphanumeric characters in the string;
  //   values should be the count
}
```

### Elaborate

```javascript
function charCount(str) {
  // Make object to return at end
  // Loop over string
  // Return object at end
}
```

### Elaborate More

```javascript
function charCount() {
  // Make object to return at end
  // Loop over string, for each character...
  //  If the char is a number/letter AND is a key in our object, add one to count.
  //  If the char is a number/letter AND is not in our object, add it and set value to 1
  //  If the char is something else (space, period, etc.) don't do anything
  // Return object at end
}
```

## Solve/Simplify

### Find the core difficulty in what you're trying to do

ex.1: Can't visualize how this would work in a loop.

ex.2: Can't remember the exact method name to do something (str.toLowerCase(), etc.)?

### Temporarily ignore that difficulty

### Write a simplified solution

ex.1 Try working with the first character in the string rather than dealing with the loop. Find the pattern and then incorporate the loop.

```javascript
// ex.2
function charCount(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    let c = str[i]; // <- Not lowercasing, ignoring.
    // Not handling check for alphanumeric
    if (obj.hasOwnProperty(c)) {
      obj[c]++;
    } else {
      obj[c] = 1;
    }
  }
  return obj;
}
```

Think about how to check for alphanumeric. Probably regular expression or character codes. Ask somebody if you can't come up with anything.

### Then incorporate that difficulty back in

```javascript
// ex.2
function charCount(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    let c = str[i].toLowerCase(); // <- Researched this via Google / got hint
    // Constructed regular expression
    if (c.match(/^[0-9a-zA-Z]+$/i)) {
      if (obj.hasOwnProperty(c)) {
        obj[c]++;
      } else {
        obj[c] = 1;
      }
    }
  }
  return obj;
}
```

## Look Back and Refactor

### Can you check the result

Does the code work?

### Can you derive the result differently

### Can you understand it at a glance

Can you understand your solution? Is it intuitive, does it make sense?

### Can you use the result or method for some other problem

Any similarities between this solution and another you've encountered?

### Can you improve the performance of your solution

Can we improve time complexity and/or space complexity of the solution?

### Can you think of other ways to refactor

Does the code follow conventions of the language? Style guide, company guidelines, is the space inconsistent.

### How have other people solved this problem

People share the efficient, simplistic, and wild solutions and you can learn a lot from these. Maybe the solution doesn't exist in JavaScript but exists in Java. Can you translate the Java solution?

```javascript
// ORIGINAL SOLUTION:

function charCount(str) {
  let obj = {};
  // Use "for of" loop for clarity.
  for (let i = 0; i < str.length; i++) {
    let c = str[i].toLowerCase();
    // RegEx can be slow. Use c.charCodeAt(0) to check "is alphanumeric"
    if (c.match(/^[0-9a-zA-Z]+\$/i)) {
      // We can change this if/else block into a single line
      if (obj.hasOwnProperty(c)) {
        obj[c]++;
      } else {
        obj[c] = 1;
      }
    }
  }
  return obj;
}
```

```javascript
// REFACTORED SOLUTION (More performant and more readable):

function charCount(str) {
  let obj = {};
  for (var char of str) {
    char = str[i].toLowerCase();
    if (isAlphaNumeric(char)) {
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}

function isAlphaNumeric(char) {
  var code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) &&
    !(code > 64 && code < 91) &&
    !(code > 96 && code < 123)
  ) {
    return false;
  }
  return true;
}
```
