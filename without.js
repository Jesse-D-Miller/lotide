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

// fn without implementation
  //takes in source array and array of items to remove
//for loop of items to remove
  //nested for loop of source array
    //if match then splice @ j
    //j-- to correct indexing
//return modified array and pass to assertArraysEqual

//next we will pass the modified array and the array we would manually expect back to assert array equal fn and it should take care of the rest

const without = function(sourceArray, itemsToRemoveArray) {
  let modArr = [];
  for (let values of sourceArray){
    modArr.push(values);
  }
  for (i = 0; i < itemsToRemoveArray.length; i++){
    for (j = 0; j < modArr.length; j++){
      if (modArr[j] === itemsToRemoveArray[i]){
        modArr.splice(j, 1);
        j--;
      }
    }
  }
  return modArr;
};

//test to check that sourceArray is not modified

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); 
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

//tests should call without
  //returns source array
// take value and store it in a modifiedArray variable
//pass modifiedArray and Expected array to assertArraysEqual fn

let modifiedArray = without([1, 2, 3], [1]); // => [2, 3]
assertArraysEqual(modifiedArray, [2, 3])

modifiedArray = without(["cat", "dog", "hamster", "five bucks"], ["five bucks", "carrot", "whistle", "trip"]);
assertArraysEqual(modifiedArray, ["cat", "dog", "hamster"]);

modifiedArray = without(["cat", "dog", "hamster", "five bucks"], ["cat", "dog", "hamster", "five bucks"]);
assertArraysEqual(modifiedArray, []);

modifiedArray = without(["cat", "dog", "hamster", "five bucks"], []);
assertArraysEqual(modifiedArray, ["cat", "dog", "hamster", "five bucks"]);

modifiedArray = without([1, 2, "3", "soup", -30, -30, -30, true], [2, "3", -30]);
assertArraysEqual(modifiedArray, [1, "soup", true]);