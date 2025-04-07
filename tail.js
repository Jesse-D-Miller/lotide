//this function takes an array as an input and returns an array of all the elements after the first as another array

const tail = function(arr) {
  return arr.slice(1); //returns a slice of this array starting at [1]
};

module.exports = tail;

//test code in test folder