const assert   = require('chai').assert;
const middle     = require('../middle');
const eqArrays = require("../eqArrays");
let inputArray = [];
expectedOutput = [];

describe("#middle", () => {

  it("should return [2] when given the input [1, 2, 3]", () => {
    inputArray = [1, 2, 3];
    expectedOutput = [2];
    assert(eqArrays(middle(inputArray), expectedOutput));
  });

  it("should return [3] when given the input [1, 2, 3, 4, 5]", () => {
    inputArray = [1, 2, 3, 4, 5];
    expectedOutput = [3];
    assert(eqArrays(middle(inputArray), expectedOutput));
  });

  it("should return [2, 3] when given the input [1, 2, 3, 4]", () => {
    inputArray = [1, 2, 3, 4];
    expectedOutput = [2, 3];
    assert(eqArrays(middle(inputArray), expectedOutput));
  });

  it("should return [] when given the input []", () => {
    inputArray = [];
    expectedOutput = [];
    assert(eqArrays(middle(inputArray), expectedOutput));
  });

  it("should return [] when given the input [1]", () => {
    inputArray = [1];
    expectedOutput = [];
    assert(eqArrays(middle(inputArray), expectedOutput));
  });

  it("should return [] when given the input [1, 2]", () => {
    inputArray = [1, 2];
    expectedOutput = [];
    assert(eqArrays(middle(inputArray), expectedOutput));
  });

  it("should return [true] when given the input ['cat', true 'aunt']", () => {
    inputArray = ["cat", true, "aunt"];
    expectedOutput = [true];
    assert(eqArrays(middle(inputArray), expectedOutput));
  });

});