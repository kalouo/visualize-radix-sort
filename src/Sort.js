class SomeKindOfSort {
  constructor(array) {
    this.array = array;
  }
  countDigits(num) {
    return Number(String(num).length);
  }
  getDigit(num, i) {
    return i + 1 > String(num).length
      ? 0
      : Number(String(num)[String(num).length - i - 1]);
  }
  countMax(array) {
    let maxDigits = 0,
      length;
    for (let number of array) {
      length = this.countDigits(number);
      maxDigits = Math.max(maxDigits, length);
    }
    return maxDigits;
  }
  sortRadix(numbers) {
    const maxDigits = this.countMax(numbers);
    let digitSort, digit;
    for (let k = 0; k < maxDigits; k++) {
      digitSort = Array.from({ length: 10 }, () => []);
      for (let i = 0; i < numbers.length; i++) {
        digit = this.getDigit(numbers[i], k);
        digitSort[digit].push(numbers[i]);
      }
      numbers = [].concat(...digitSort);
    }
    return numbers;
  }
}

module.exports = SomeKindOfSort;
