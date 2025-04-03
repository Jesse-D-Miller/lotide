//implenent fn letterPositions
//input: sentence as a string
//output: all indices of all characters object where key = letter && value = array of indices
//make array w/ split("")
//loop accross array
//  if (!" ")
//  results[index] = [index]
//    i think i need to access the array at result[splitArr[i]] and push the next value

const letterPositions = function(sentences) {
  const results = {};
  let splitArr = sentences.split("");
  for (let i = 0; i < splitArr.length; i++) {
    if (splitArr[i] !== " ") {
      if (results[splitArr[i]] === undefined) {
        results[splitArr[i]] = [i];
      } else {
        results[splitArr[i]].push(i);
      }
    }
  }
  return results;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Input Arrays Match: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Input Arrays DO NOT Match: ${array1} !== ${array2}`);
  }
};

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

const result = letterPositions(" hello world");
assertArraysEqual(eqArrays(result["h"], [1]), true);
assertArraysEqual(eqArrays(result["e"], [2]), true);
assertArraysEqual(eqArrays(result["l"], [3, 4, 10]), true);
assertArraysEqual(eqArrays(result["o"], [5, 8]), true);
assertArraysEqual(eqArrays(result["w"], [7]), true);
assertArraysEqual(eqArrays(result["r"], [9]), true);
assertArraysEqual(eqArrays(result["d"], [11]), true);