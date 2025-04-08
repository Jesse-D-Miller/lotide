//this function takes an array as an input and returns an array of all the elements after the first as another array

const tail = function(arr) {
  if (arr.length === 0 || arr.length === 1) {
    return undefined;
  }
  return arr.slice(1); //returns a slice of this array starting at [1]
};

module.exports = tail;

//test code in test folder