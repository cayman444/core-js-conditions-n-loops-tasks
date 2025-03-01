/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  if (number < 0) return false;
  return true;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  const arr = [a, b, c];
  let max = arr[0];
  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (
    queen.x === king.x ||
    queen.y === king.y ||
    Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)
  ) {
    return true;
  }
  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a === b || a === c || b === c) {
    if (a + b <= c || a + c <= b || b + c <= a) return false;
    return true;
  }
  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let str = '';
  let a = num;
  const dictionary = [
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1],
  ];

  for (let i = 0; i < dictionary.length; i += 1) {
    for (let j = 0; j < dictionary[i].length; j += 1) {
      if (typeof dictionary[i][j] === 'number') {
        while (dictionary[i][j] <= a) {
          str += dictionary[i][j - 1];
          a -= dictionary[i][j];
        }
      }
    }
  }
  return str;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let newStr = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    switch (numberStr[i]) {
      case '1':
        newStr += 'one';
        break;
      case '0':
        newStr += 'zero';
        break;
      case '-':
        newStr += 'minus';
        break;
      case '2':
        newStr += 'two';
        break;
      case '3':
        newStr += 'three';
        break;
      case '4':
        newStr += 'four';
        break;
      case '5':
        newStr += 'five';
        break;
      case '6':
        newStr += 'six';
        break;
      case '7':
        newStr += 'seven';
        break;
      case '8':
        newStr += 'eight';
        break;
      case '9':
        newStr += 'nine';
        break;
      default:
        newStr += 'point';
        break;
    }

    if (i !== numberStr.length - 1) newStr += ' ';
  }
  return newStr;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let newStr = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    newStr += str[i];
  }
  if (str === newStr) return true;
  return false;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) return i;
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let number = num;
  while (number > 0) {
    const current = number % 10;
    if (current === digit) return true;
    number = Math.floor(number / 10);
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    let left = 0;
    let right = 0;

    for (let j = 0; j < i; j += 1) {
      left += arr[j];
    }

    for (let k = i + 1; k < arr.length; k += 1) {
      right += arr[k];
    }

    if (left === right) return i;
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  let counter = 1;
  let startCol = 0;
  let endCol = size - 1;
  let startRow = 0;
  let endRow = size - 1;
  const matrix = [];

  for (let i = 0; i < size; i += 1) {
    matrix[i] = [];
    for (let j = 0; j < size; j += 1) {
      matrix[i][j] = '';
    }
  }

  while (startCol <= endCol && startRow <= endRow) {
    for (let i = startCol; i <= endCol; i += 1) {
      matrix[startRow][i] = counter;
      counter += 1;
    }
    startRow += 1;

    for (let j = startRow; j <= endRow; j += 1) {
      matrix[j][endCol] = counter;
      counter += 1;
    }
    endCol -= 1;

    for (let k = endCol; k >= startCol; k -= 1) {
      matrix[endRow][k] = counter;
      counter += 1;
    }
    endRow -= 1;

    for (let l = endRow; l >= startRow; l -= 1) {
      matrix[l][startCol] = counter;
      counter += 1;
    }
    startCol += 1;
  }
  return matrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const currentMatrix = matrix;
  const newMatrix = [];

  for (let i = 0; i < matrix.length; i += 1) {
    const newRow = [];
    for (let j = 0; j < matrix.length; j += 1) {
      newRow[j] = matrix[matrix.length - 1 - j][i];
    }
    newMatrix[i] = newRow;
  }

  for (let i = 0; i < newMatrix.length; i += 1) {
    currentMatrix[i] = newMatrix[i];
  }

  return matrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  if (arr.length <= 1) return arr;
  const currentArr = arr;

  const ind = Math.floor(arr.length / 2);
  const itemInd = arr[ind];
  const min = [];
  const max = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (i !== ind) {
      if (arr[i] < itemInd) {
        min[min.length] = arr[i];
      } else {
        max[max.length] = arr[i];
      }
    }
  }

  const sortArr = [...sortByAsc(min), itemInd, ...sortByAsc(max)];

  for (let i = 0; i < sortArr.length; i += 1) {
    currentArr[i] = sortArr[i];
  }

  return arr;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let strEven = '';
  let strOdd = '';
  let currentIterations = iterations;
  let currentStr = str;
  const initialStr = str;
  let count = 0;
  let res = '';

  while (currentIterations) {
    for (let i = 0; i < currentStr.length; i += 1) {
      if (i % 2 !== 0) strOdd += currentStr[i];
      else strEven += currentStr[i];
    }

    currentIterations -= 1;
    count += 1;

    res = strEven + strOdd;
    currentStr = res;
    strEven = '';
    strOdd = '';

    if (currentStr < 1) return res;
    if (initialStr === currentStr) {
      return shuffleChar(currentStr, currentIterations % count);
    }
  }

  return res;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const numArr = Array.from(`${number}`, Number);

  const left = [];
  let swapNum = -1;
  let swapInd;
  const right = [];

  for (let i = numArr.length - 1; i >= 0; i -= 1) {
    if (numArr[i - 1] < numArr[i]) {
      swapNum = numArr[i - 1];
      swapInd = i - 1;
      break;
    }
  }

  if (swapInd === -1) return number;

  for (let i = 0; i < numArr.length; i += 1) {
    if (swapInd > i) {
      left.push(numArr[i]);
    } else if (swapInd < i) {
      right.push(numArr[i]);
    }
  }

  let min = right[0];
  let indMin = 0;

  for (let i = 0; i < right.length; i += 1) {
    if (right[i] > swapNum && right[i] < min) {
      min = right[i];
      indMin = i;
    }
  }

  const temp = swapNum;
  swapNum = min;
  right[indMin] = temp;

  return Number(left.join('') + swapNum + right.sort((a, b) => a - b).join(''));
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
