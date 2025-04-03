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

//input: 2x objects
//output: true/fale equality
//Check: same # of Keys && same values in same keys
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (const keys in object1) {
      if (object1[keys] !== object2[keys]) {
        // are both arrays and do they match VVV
        if (!eqArrays(object1[keys], object2[keys] || !object1[keys].isArray || !object2[keys].isArray)){ 
          return false;
        }
      }
    }
    return true;
  } else {
    return false;
  }

};

//test code

const inputObject1 = {make: "Honda", colour: ["red", "black"]};
const inputObject2 = {make: "Honda", colour: ["red", "black"]};
assertEqual(eqObjects(inputObject1, inputObject2), true); //=>true

const inputObject3 = {make: "Honda", colour: ["red", "black"], model: "Civic"};
assertEqual(eqObjects(inputObject1, inputObject3), false) //=>false