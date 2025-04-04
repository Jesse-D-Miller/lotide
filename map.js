//define map function
//input1: Array
//input2: Callback Fn
//output: mapped array based on Cbfn
//

const stormlightBooks = [
  "The Way of Kings",
  "Words of Radiance",
  "Oathbringer",
  "Rhythm of War",
  "Dawnshard"
];

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

const map = function(array, callback) {
  
  const results = [];

  for (let book of array) {
    results.push(callback(book));
  }

  return results;

};

const mapAString = map(stormlightBooks, (book) => book[0]);



// test cases
let expextedString = [ 'T', 'W', 'O', 'R', 'D' ]
assertArraysEqual(mapAString, expextedString);