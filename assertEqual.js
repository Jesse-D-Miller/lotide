const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected);
  }
};

//test code
assertEqual("lighthouse labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("lighthouse labs", "lighthouse labs");
assertEqual(1, -1);
assertEqual(1, 10);