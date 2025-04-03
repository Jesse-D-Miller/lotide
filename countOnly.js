const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//fn countOnly
  // input: array
  // input: object of boolean
  // output: count of items in array associated with true boolean values in the object
    //make return object{}
//create output object {}
//for (value of array){
//  for (keys in itemsToCount)
//    if (keys === value && Object.values[keys] === true)
//      add count to outputObject{}
//    if (keys === value && Object.values[keys] === false)
//      do nothing, this is a redundant if statement and will be left out in code
//}
//return outputObject

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function (allItems, itemsToCount) {
  outputObject = {};
  for (const keys in itemsToCount) {
    if (itemsToCount[keys] === true){
      let count = 0;
      for (const value of allItems) {
        if (keys === value) {
          count++;
          outputObject[keys] = count;
        }
      }
    }
  }
  return outputObject;
};

//test code

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);