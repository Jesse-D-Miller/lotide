//this function works compares 2 arrays
//it takes in two arrays as arguements and compares the lengths, if the lengths match it will compare arrays element by element

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

module.exports = eqArrays;

//test code in test folder