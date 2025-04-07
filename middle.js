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

//define function 'middle'
  //input: an array
  //output: middle-most element(s)
//if empty || 1 || 2
  //no middle
  //return empty array[]
//if .length even
  // return .length/2 && (.length/2) -1
//if .length odd
  //subtract 1 from length => divide/2 => add +1

const middle = function(sourceArray) {
  let middleElement = [];
  if (sourceArray.length <= 2) {
    return middleElement;
  } else if (sourceArray.length % 2 === 0) {
    //return middle 2 elements
    middleElement = [
      sourceArray[(sourceArray.length / 2) - 1],
      sourceArray[sourceArray.length / 2]
    ];
  } else {
    //this is odd and returns middle element
    middleElement = [sourceArray[(sourceArray.length - 1) / 2]];
  }
  return middleElement;
};

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([]), []);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle(["cat", true, "aunt"]), [true]);