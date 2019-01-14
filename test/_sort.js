const Sort = require("../src/Sort");
const { expect } = require("chai");

describe("Radix Sort", () => {
  it("should be a function", () => {
    expect(Sort).to.be.a("function");
  });
  it("should have a sort method", () => {
    expect(Sort.prototype.sortRadix).to.be.a("function");
  });
  it("should have a helper function countDigits that returns the number of digits in a number", () => {
    expect(Sort.prototype.countDigits(12345)).to.equal(5);
  });
  it("should have a helper function getDigit that returns the digit of at a given position", () => {
    expect(Sort.prototype.getDigit(12345, 0)).to.equal(5);
    expect(Sort.prototype.getDigit(12345, 1)).to.equal(4);
    expect(Sort.prototype.getDigit(12345, 2)).to.equal(3);
    expect(Sort.prototype.getDigit(12345, 3)).to.equal(2);
    expect(Sort.prototype.getDigit(12345, 4)).to.equal(1);
    expect(Sort.prototype.getDigit(7, 4)).to.equal(0);
  });
  it("should have a helper function countMax that returns the maximum number of digits in a number array", () => {
    const arr = [1556, 4, 3556, 593, 408, 4386, 902, 7, 8157, 86, 9637, 29];
    expect(Sort.prototype.countMax(arr)).to.equal(4);
  });
  it("should sort an  array of numbers in ascending order", () => {
    const array = [1556, 4, 3556, 593, 408, 902, 7, 86, 29];
    const result = Sort.prototype.sortRadix(array);
    const expected = [4, 7, 29, 86, 408, 593, 902, 1556, 3556];
    expect(...result).to.equal(...expected);
  });
});
