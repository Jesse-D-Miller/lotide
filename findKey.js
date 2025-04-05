const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
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
  
    if (callback(inputObject[keys])){
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

const callbackKeyComparison = (weapon) => {
  if (weapon.powerLevel === 10) {
    return true;
  }
  return false;  
};

//assert equals calls for test cases

assertEqual(findKey(fantasyWeapons, callbackKeyComparison), "Mjolnir");