//takes in an array as an arguement and returns the middle element(s) depending on length of input array

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

module.exports = middle;
//test code in test file