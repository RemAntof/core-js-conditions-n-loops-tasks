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
  return number >= 0;
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
  let max;
  if (a > b) {
    max = a;
  } else {
    max = b;
  }
  if (c > b) {
    max = c;
  }
  if (a > c) {
    max = a;
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
  let isCapture = false;
  if (queen.x === king.x || queen.y === king.y) {
    isCapture = true;
  }
  if (Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)) {
    isCapture = true;
  }
  return isCapture;
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
  if (a <= 0 || b <= 0 || c <= 0) {
    return false;
  }
  if ((a + b > c && b + c > a && c + a > b && a === b) || b === c || c === a) {
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
  const symbols = [
    '',
    'I',
    'II',
    'III',
    'IV',
    'V',
    'VI',
    'VII',
    'VIII',
    'IX',
    'X',
  ];
  let dec = 0;
  let decRom = '';
  for (let i = 10; i < num; i += 1) {
    if (i % 10 === 0) {
      dec += 10;
      decRom += 'X';
    }
  }
  const intRom = symbols[num - dec];
  return decRom + intRom;
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
  let final = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    switch (numberStr[i]) {
      case '0':
        final += 'zero';
        break;
      case '1':
        final += 'one';
        break;
      case '2':
        final += 'two';
        break;
      case '3':
        final += 'three';
        break;
      case '4':
        final += 'four';
        break;
      case '5':
        final += 'five';
        break;
      case '6':
        final += 'six';
        break;
      case '7':
        final += 'seven';
        break;
      case '8':
        final += 'eight';
        break;
      case '9':
        final += 'nine';
        break;
      case '.':
      case ',':
        final += 'point';
        break;
      case '-':
        final += 'minus';
        break;
      default:
        final += 'Invalid digit';
        break;
    }
    if (numberStr.length !== i + 1) {
      final += ' ';
    }
  }
  return final;
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
  let isPali = true;
  let b = str.length - 1;
  let a = 0;
  while (a <= b) {
    if (str[a] !== str[b]) {
      isPali = false;
    }
    a += 1;
    b -= 1;
  }
  return isPali;
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
 *  'qwerty', 'е'     => 2
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  let found = -1;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      found = i;
    }
  }
  return found;
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
  let test = num;
  while (test > 0) {
    const lastDigit = test % 10;
    if (lastDigit === digit) {
      return true;
    }
    test = Math.floor(test / 10);
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
    let leftSum = 0;
    for (let j = 0; j < i; j += 1) {
      leftSum += arr[j];
    }

    let rightSum = 0;
    for (let k = i + 1; k < arr.length; k += 1) {
      rightSum += arr[k];
    }

    if (leftSum === rightSum) {
      return i;
    }
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
  const matrix = [];
  for (let i = 0; i < size; i += 1) {
    matrix[i] = new Array(size);
  }

  let num = 1;
  let topRow = 0;
  let bottomRow = size - 1;
  let leftCol = 0;
  let rightCol = size - 1;

  while (topRow <= bottomRow && leftCol <= rightCol) {
    for (let i = leftCol; i <= rightCol; i += 1) {
      matrix[topRow][i] = num;
      num += 1;
    }
    topRow += 1;

    for (let i = topRow; i <= bottomRow; i += 1) {
      matrix[i][rightCol] = num;
      num += 1;
    }
    rightCol -= 1;

    if (topRow <= bottomRow) {
      for (let i = rightCol; i >= leftCol; i -= 1) {
        matrix[bottomRow][i] = num;
        num += 1;
      }
      bottomRow -= 1;
    }

    if (leftCol <= rightCol) {
      for (let i = bottomRow; i >= topRow; i -= 1) {
        matrix[i][leftCol] = num;
        num += 1;
      }
      leftCol += 1;
    }
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
  let colRot = matrix.length - 1;
  let rowRot = 0;
  const matrixRes = matrix;
  const matrixRes2 = [];
  for (let i = 0; i < matrix.length; i += 1) {
    matrixRes2[i] = new Array(matrix.length);
  }

  for (let i = 0; i < colRot + 1; i += 1) {
    for (let k = 0; k < matrix[0].length; k += 1) {
      matrixRes2[i][k] = matrix[colRot][rowRot];
      colRot -= 1;
      if (colRot < 0) {
        colRot = matrix.length - 1;
      }
    }
    rowRot += 1;
  }
  for (let i = 0; i < colRot + 1; i += 1) {
    for (let k = 0; k < matrix[0].length; k += 1) {
      matrixRes[i][k] = matrixRes2[i][k];
    }
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
  const len = arr.length;
  const arr2 = arr;

  for (let i = 1; i < len; i += 1) {
    const key = arr2[i];
    let j = i - 1;

    while (j >= 0 && arr2[j] > key) {
      arr2[j + 1] = arr2[j];
      j -= 1;
    }

    arr2[j + 1] = key;
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
  const len = str.length;
  let string = str;
  let iterate = iterations;
  let iter = 1;
  while (iter <= iterate) {
    let firstStr = '';
    let lastStr = '';
    for (let i = 0; i < len; i += 1) {
      if (i % 2 === 0) {
        firstStr += string[i];
      } else {
        lastStr += string[i];
      }
    }
    string = firstStr + lastStr;
    iter += 1;
    if (str === string) {
      iterate = iterations % (iter - 1);
      iter = 1;
    }
  }
  return string;
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
  const numberArray = Array.from(String(number), Number);
  const len = numberArray.length - 1;
  const rightSide = [];
  let bigFound = false;
  for (let i = len; i > 0; i -= 1) {
    if (numberArray[i - 1] < numberArray[i] && !bigFound) {
      bigFound = true;
      const lower = numberArray[i - 1];
      rightSide.push(numberArray.pop());
      let isBigger = 10;
      for (let k = 0; k < rightSide.length; k += 1) {
        if (lower < rightSide[k] && isBigger > rightSide[k]) {
          isBigger = rightSide[k];
          numberArray[i - 1] = rightSide[k];
          rightSide[k] = lower;
        }
      }
      rightSide.sort();
      numberArray.push(...rightSide);
    } else if (!bigFound) {
      rightSide.push(numberArray.pop());
    }
  }

  const reconstructedNumber = numberArray.reduce(
    (acc, digit) => acc * 10 + digit,
    0
  );
  return reconstructedNumber;
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
