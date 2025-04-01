const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(arr) {
  return arr[0];
};

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["lighthouse labs", 6, 7]), "Bootcamp");
assertEqual(head([0, 6, 7]),  1);
assertEqual(head([-1, 6, 7]),  "lighthouse labs");
assertEqual(head([-1, 6, 7]),  -1);
assertEqual(head([100, 6, 7]),  10);
assertEqual(head([]),  10);
assertEqual(head([100]),  10);