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

// input: object && callback
// output: returns first KEY which CALLBACK return TRUTHY for
//  if no key found return undefined
//the object we are given has an object in an object and i think i want to use recursion

// const findKeyByValue = function(object, value) {
//   for (const keys in object) {
//     if (object[keys] === value) {
//       return keys;
//     }
//   }
//   return undefined;
// };

//for in loop to extract keys on surface level
  //reursion to use for in loop passing keys as objects
  //read power level
  //invoke callback to check VVV
  //if power level === 10 return truthy
//main function
//return Key
const findKey = (inputObject, callback) => {
  for (const keys in inputObject) {
    if (callback(keys)){
      return keys;
    }
  }
  return undefined;
};

// create input objects here
const fantasyWeapons = {
  "Andúril": { universe: "Lord of the Rings", powerLevel: 9 },
  "Lightsaber": { universe: "Star Wars", powerLevel: 8 },
  "Mjolnir": { universe: "Marvel", powerLevel: 10 },
  "The Elder Wand": { universe: "Harry Potter", powerLevel: 10 },
  "Needle": { universe: "Game of Thrones", powerLevel: 4 },
  "Stormbreaker": { universe: "Marvel", powerLevel: 10 }
};



//create callback function here
//takes a key and checks it against a condition
  // if key === condition
  //return truthy if power level = 10
const callbackKeyComparison = (key) => {key.powerlevel === 10};

//assert equals calls for test cases