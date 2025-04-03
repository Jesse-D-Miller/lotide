const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
//input: 2x objects
//output: true/fale equality
//Check: same # of Keys && same values in same keys
const eqObjects = function(object1, object2) {

};

//test code

const inputObject1 = {make: "Honda", colour: "red"};
const inputObject2 = {make: "Honda", colour: "red"};
eqObjects(inputObject1, inputObject2); //=>true

const inputObject3 = {make: "Honda", colour: "red", model: "Civic"};
eqObjects(inputObject1, inputObject3) //=>false