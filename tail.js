const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arr) {
  return arr.slice(1); //returns a slice of this array starting at [1]
};

// Test Case 1: Check the returned array elements
const result1 = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result1.length, 2); // ensure we get back two elements
assertEqual(result1[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result1[1], "Labs"); // ensure second element is "Labs"

//test case 2: check that original array is not modified
const strArr = ["dog water", "video", "games"];
tail(strArr); //runs tail but does not do anything with value
assertEqual(strArr.length, 3);

//test case 3: one element array
const result2 = tail(["Hello"]);
assertEqual(result2.length, 2);
assertEqual(result2[0], "Lighthouse");
assertEqual(result2[1], "Labs");
console.log(result2);

//test case 4: empty array input
const result3 = tail([]);
assertEqual(result3.length, 2);
assertEqual(result3[0], "Lighthouse");
assertEqual(result3[1], "Labs");
console.log(result3);