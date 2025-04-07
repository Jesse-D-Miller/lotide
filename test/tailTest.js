const tail = require("../tail");
const assertEqual = require("../assertEqual");

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
assertEqual(result2.length, 0);
assertEqual(result2[0], undefined); //no element should return undefined

//test case 4: empty array input
const result3 = tail([]);
assertEqual(result3.length, 0); //length of array is zero (empty)
assertEqual(result3[0], undefined);
assertEqual(result3[1], undefined);