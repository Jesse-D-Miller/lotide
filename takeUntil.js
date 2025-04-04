const eqArrays = function(arr1, arr2) {
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Input Arrays Match: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Input Arrays DO NOT Match: ${array1} !== ${array2}`);
  }
};

// Array of random numbers (0-100)
const randomNumbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 101));

// Array of random strings (single-letter characters)
const randomLetters = Array.from({ length: 10 }, () => String.fromCharCode(97 + Math.floor(Math.random() * 26)));

// Array of random booleans
const randomBooleans = Array.from({ length: 10 }, () => Math.random() < 0.5);

// Array of random words (simple example words)
const randomWords = [
  "apple", "banana", "cherry", "dog", "elephant",
  "forest", "grape", "house", "island", "jungle"
];

//input: array to work with
//input: callback (lodash call it predicate)
//output: slice of array with elements taken from the beginning
//functionality: continues to work until truthy value is returned
//  callback returns one vlaue: item in the array

const takeUntil = (array, callback) => {

  const slicedArray = [];

  for (let i = 0; i < array.length; i++) {
    //if statement for false return sliced string at index
    if (callback(i)){
      slicedArray = array.slice(0, i);
      return slicedArray;
    }
  }

}
let expectedArray = [1]; //unknown as array is random
// assertArraysEqual(takeUntil(randomNumbers, (index) => index > 75), expectedArray);

// expectedArray = [2]; //unknown as array is random
// assertArraysEqual(takeUntil(randomBooleans, (index) => index === true), expectedArray);

// expectedArray = [3]; //unknown as array is random
// assertArraysEqual(takeUntil(randomLetters, (index) => index === "a"), expectedArray);

expectedArray = ["apple", "banana", "cherry"];
assertArraysEqual(takeUntil(randomNumbers, (index) => index === "dog"), expectedArray);