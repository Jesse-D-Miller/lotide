const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//pseudo
//
//input: sentence as a STRING ""
//output: return count of letters in string {}
//declare fn countLetter
//define outputObject locally
//declare array locally
//  split()
//sort array alphabetically
//loop accross array to count
//  if " " splice (i, 1)
//  if next matches current
//    count ++
// if next !== current, add new property to object
//return outputObject


const countLetters = function(str) {
  let outputObject = {};
  let strArrSort = [];
  let count = 0;
  strArrSort = str.split(""); //.toLowerCase() i put this in but it wasnt required aparently but i like it
  strArrSort.sort();
  for (let i = 0; i < strArrSort.length; i++) {
    if (strArrSort[i] === " ") {
      strArrSort.splice(i, 1);
      i--;
    } else if (strArrSort[i] === strArrSort[i + 1] && i < strArrSort.length - 1) {
      count++;
    } else {
      count++;
      outputObject[strArrSort[i]] = count;
      count = 0;
    }
  }
  return outputObject;
};

const result = countLetters("the quick brown fox jumpsS over the lazy dog");
assertEqual(result["a"], 1);
assertEqual(result["b"], 1);
assertEqual(result["c"], 1);
assertEqual(result["d"], 1);
assertEqual(result["e"], 3);
assertEqual(result["f"], 1);
assertEqual(result["g"], 1);
assertEqual(result["h"], 2);
assertEqual(result["i"], 1);
assertEqual(result["j"], 1);
assertEqual(result["k"], 1);
assertEqual(result["l"], 1);
assertEqual(result["m"], 1);
assertEqual(result["n"], 1);
assertEqual(result["o"], 4);
assertEqual(result["p"], 1);
assertEqual(result["q"], 1);
assertEqual(result["r"], 2);
assertEqual(result["S"], 1);
assertEqual(result["s"], 1);
assertEqual(result["t"], 2);
assertEqual(result["u"], 2);
assertEqual(result["v"], 1);
assertEqual(result["w"], 1);
assertEqual(result["y"], 1);
assertEqual(result["x"], 1);
assertEqual(result["z"], 1);