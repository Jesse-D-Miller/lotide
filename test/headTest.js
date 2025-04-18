const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {

  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });

  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), 'Hello');
  });

  it("returns 'lighthouse labs' for ['lighthouse labs', 6, 7]", () => {
    assert.strictEqual(head(["lighthouse labs", 6, 7]), 'lighthouse labs');
  });

  it("returns 0 for [0, 6, 7]", () => {
    assert.strictEqual(head([0, 6, 7]), 0);
  });

  it("returns -1 for [-1, 6, 7]", () => {
    assert.strictEqual(head([-1, 6, 7]), -1);
  });

  it("returns undefined for []", () => {
    assert.strictEqual(head([]), undefined);
  });

});