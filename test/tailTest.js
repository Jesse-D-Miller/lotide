const assert   = require('chai').assert;
const tail     = require('../tail');
let inputArray = [];
expectedOutput = [];

describe("#tail", () => {

  it("should return ['Lighthouse', 'Labs'] when given the input ['Hello', 'Lighthouse', 'Labs']", () => {
    inputArray = ["Hello", "Lighthouse", "Labs"];
    expectedOutput = ["Lighthouse", "Labs"];
    assert.deepEqual(tail(inputArray), expectedOutput);
  });

  it("should return leave the original array unchanged", () => {
    inputArray = ["dog water", "video", "games"];
    expectedOutput = ["dog water", "video", "games"];
    tail(inputArray);
    assert.deepEqual(inputArray, expectedOutput);
  });

  it("should return undefined when passed an array of length 1", () => {
    assert.strictEqual(tail(["hello"]), undefined);
  });

  it("should return undefined when passed an array of length 0 (empty)", () => {
    assert.strictEqual(tail([]), undefined);
  });

});