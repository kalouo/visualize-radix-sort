function randomArray(length, limit) {
  let array = [],
    number;
  for (let i = 0; i < length; i++) {
    number = generateRandomNumber(limit);
    array.push(number);
  }
  return array;
}

function generateRandomNumber(limit) {
  return Math.floor(Math.random() * limit);
}

function countDigits(num) {
  return Number(String(num).length);
}

function bucketsEmpty() {
  return (
    document
      .querySelector(".digit-buckets-container")
      .querySelectorAll(".input-number").length === 0
  );
}

function ongoingSort() {
  return Number(document.querySelector(".tracking-index").innerText) > 1;
}

function generateNumbers(size, max) {
  if (!bucketsEmpty() || ongoingSort()) return;
  const array = randomArray(size, max);
  const maximumDigits = deriveMax(array);
  const numbers = document.querySelector(".input-numbers-container");
  numbers.innerHTML = "";
  for (let number of array) {
    let numberBall = document.createElement("div");
    numberBall.className = "input-number";
    numberBall.textContent = number;
    numberBall.dataset.id = number;
    numbers.append(numberBall);
  }
  setMax(maximumDigits);
  setTracking();
}

function deriveMax(array) {
  let maxDigits = 0,
    length;
  for (let number of array) {
    length = countDigits(number);
    maxDigits = Math.max(maxDigits, length);
  }
  return maxDigits;
}

function setMax(input) {
  document.querySelector(".max-digits").innerText = input;
  document.querySelector(".max-digits-converted").innerText =
    10 ** (input - 1) + "s";
}

function setTracking() {
  let tracking = document.createElement("div");
  tracking.className = "tracking";

  let index = document.querySelector(".tracking-index");
  index.innerText = "1";

  let indexConverted = document.querySelector(".tracking-index-converted");
  indexConverted.innerText = "0s";
}

function getDigit(num, i) {
  return i + 1 > String(num).length
    ? 0
    : Number(String(num)[String(num).length - i - 1]);
}

function arrangeInBuckets() {
  const numberBalls = Array.from(
    document.querySelector(".input-numbers-container").children
  );
  const i = Number(document.querySelector(".tracking-index").innerText) - 1;
  for (let ball of numberBalls) {
    let numberInBall = Number(ball.dataset.id);
    let digit = getDigit(numberInBall, i);
    let targetBucket = document.querySelector(`[data-id='${digit}']`);
    targetBucket.append(ball);
  }
}

function rearrangeAtTop() {
  const top = document.querySelector(".input-numbers-container");
  for (let i = 0; i < 10; i++) {
    let bucket = document.querySelector(`[data-id='${i}']`);
    let ballsInBucket = Array.from(bucket.children);
    for (let ball of ballsInBucket) {
      top.append(ball);
    }
  }
  incrementTracking();
  checkDone();
}

function incrementTracking() {
  let tracker = document.querySelector(".tracking-index");
  let trackerConverted = document.querySelector(".tracking-index-converted");
  let current = Number(tracker.innerText);
  tracker.innerText = current + 1;
  trackerConverted.innerText = `${10 ** current}s`;
}
function checkDone() {
  let current = Number(document.querySelector(".tracking-index").innerText);
  let max = Number(document.querySelector(".max-digits").innerText);
  if (current > max) {
    document.querySelector(".tracking").innerText = "SORTED!";
    document.querySelector(".tracking").style.fontSize = "100px";
  }
}
