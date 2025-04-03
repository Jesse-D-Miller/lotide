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

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
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
assertEqual(eqArrays(result["h"], [1]), true);
assertEqual(eqArrays(result["e"], [2]), true);
assertEqual(eqArrays(result["l"], [3, 4, 10]), true);
assertEqual(eqArrays(result["o"], [5, 8]), true);
assertEqual(eqArrays(result["w"], [7]), true);
assertEqual(eqArrays(result["r"], [9]), true);
assertEqual(eqArrays(result["d"], [11]), true);