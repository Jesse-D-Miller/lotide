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
//const randomNumbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 101));

const randomNumbers100 = [
  -14, -94, 66, -29, 52, -4, -43, -32, -92, 99,
  -84, 56, -57, 95, 42, 83, 93, -77, 14, -51,
  -89, 3, 71, -30, 31, -24, -12, 50, -86, 1,
  13, 79, -91, 58, -9, 89, -65, -31, -49, -99,
  9, 33, 0, 87, -16, -2, 12, -22, -58, -38,
  -44, 27, 29, -88, -46, -72, -23, 10, 25, -7,
  48, -96, -83, 65, 85, -6, 91, -8, -80, 23,
  47, 22, -5, 6, -90, 92, -17, -93, -87, -11,
  73, -53, 53, -67, -33, -20, 64, 41, 20, 55,
  78, 21, 34, 40, 97, 95, 4, 17, 67, -27
];

// Array of random strings (single-letter characters)
//const randomLetters = Array.from({ length: 10 }, () => String.fromCharCode(97 + Math.floor(Math.random() * 26)));

const alphabet = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
  "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
  "u", "v", "w", "x", "y", "z"
];

// Array of random booleans
//const randomBooleans = Array.from({ length: 10 }, () => Math.random() < 0.5);

const randomBooleans10 = [
  true, true, true, true,
  false, true, false, false, true, false
];

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

  let slicedArray = [];

  for (let i = 0; i < array.length; i++) {
    //if statement for false return sliced string at index
    if (callback(array, i)) {
      slicedArray = array.slice(0, i);
      return slicedArray;
    }
  }
};

//these commented out test casses all work a some of the time, i think that its because they are very random and there is some unknown interaction, i dont think the arrays are the issue, i think it is how they are generated. im not going to use these for now.

//let expectedArray = [1]; //unknown as array is random
//assertArraysEqual(takeUntil(randomNumbers, (array, i) => array[i] > 75), expectedArray);

//expectedArray = [2]; //unknown as array is random
//assertArraysEqual(takeUntil(randomBooleans, (array, i) => array[i] === true), expectedArray);

//expectedArray = [3]; //unknown as array is random
//assertArraysEqual(takeUntil(randomLetters, (array, i) => array[i] === "a"), expectedArray);

let expectedArray = ["apple", "banana", "cherry"];
assertArraysEqual(takeUntil(randomWords, (array, i) => array[i] === "dog"), expectedArray);

expectedArray = [-14, -94, 66, -29, 52, -4, -43, -32, -92];
assertArraysEqual(takeUntil(randomNumbers100, (array, i) => array[i] > 72), expectedArray);

expectedArray = [true, true, true, true];
assertArraysEqual(takeUntil(randomBooleans10, (array, i) => array[i] === false), expectedArray);

expectedArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
assertArraysEqual(takeUntil(alphabet, (array, i) => array[i] === "k"), expectedArray);