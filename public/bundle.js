/******/ (function(modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = {}; // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {},
      /******/
    }); // Execute the module function
    /******/
    /******/ /******/ modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    ); // Flag the module as loaded
    /******/
    /******/ /******/ module.l = true; // Return the exports of the module
    /******/
    /******/ /******/ return module.exports;
    /******/
  } // expose the modules object (__webpack_modules__)
  /******/
  /******/
  /******/ /******/ __webpack_require__.m = modules; // expose the module cache
  /******/
  /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
  /******/
  /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        /******/ configurable: false,
        /******/ enumerable: true,
        /******/ get: getter,
        /******/
      });
      /******/
    }
    /******/
  }; // getDefaultExport function for compatibility with non-harmony modules
  /******/
  /******/ /******/ __webpack_require__.n = function(module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module["default"];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, "a", getter);
    /******/ return getter;
    /******/
  }; // Object.prototype.hasOwnProperty.call
  /******/
  /******/ /******/ __webpack_require__.o = function(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }; // __webpack_public_path__
  /******/
  /******/ /******/ __webpack_require__.p = ""; // Load entry module and return exports
  /******/
  /******/ /******/ return __webpack_require__((__webpack_require__.s = 0));
  /******/
})(
  /************************************************************************/
  /******/ [
    /* 0 */
    /***/ function(module, exports) {
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

      // eslint-disable-next-line no-unused-vars
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

        let indexConverted = document.querySelector(
          ".tracking-index-converted"
        );
        indexConverted.innerText = "0s";
      }

      function getDigit(num, i) {
        return i + 1 > String(num).length
          ? 0
          : Number(String(num)[String(num).length - i - 1]);
      }

      // eslint-disable-next-line no-unused-vars
      function arrangeInBuckets() {
        const numberBalls = Array.from(
          document.querySelector(".input-numbers-container").children
        );
        const i =
          Number(document.querySelector(".tracking-index").innerText) - 1;
        for (let ball of numberBalls) {
          let numberInBall = Number(ball.dataset.id);
          let digit = getDigit(numberInBall, i);
          let targetBucket = document.querySelector(`[data-id='${digit}']`);
          targetBucket.append(ball);
        }
      }

      // eslint-disable-next-line no-unused-vars
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
        let trackerConverted = document.querySelector(
          ".tracking-index-converted"
        );
        let current = Number(tracker.innerText);
        tracker.innerText = current + 1;
        trackerConverted.innerText = `${10 ** current}s`;
      }
      function checkDone() {
        let current = Number(
          document.querySelector(".tracking-index").innerText
        );
        let max = Number(document.querySelector(".max-digits").innerText);
        if (current > max) {
          document.querySelector(".tracking").innerText = "SORTED!";
          document.querySelector(".tracking").style.fontSize = "100px";
        }
      }

      /***/
    },
    /******/
  ]
);
