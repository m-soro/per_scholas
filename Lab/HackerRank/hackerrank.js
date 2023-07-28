// // my solution
// function staircase(n) {
//   let gap = n;
//   for (let i = 1; i <= n; i++) {
//     console.log(" ".repeat(gap - i) + "#".repeat(i)); // corrected
//     // console.log(" ".repeat((gap -= 1)), "#".repeat(i)); // Where i made a mistake
//   }
// }
// staircase(6);

// // google
// function stairs(n) {
//   for (let i = 1; i <= n; i++) {
//     console.log(" ".repeat(n - i) + "#".repeat(i));
//   }
// }

// stairs(6);

/**
 * --------------------
 * DIAGONAL DIFFERENCE
 * --------------------
 * @link https://www.hackerrank.com/challenges/diagonal-difference/problem
 */
let sample = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

function diagonalDifference(array) {
  let pos = array.length;
  let firstDiag = [];
  let secondDiag = [];
  for (let i = 0; i < array.length; i++) {
    firstDiag.push(array[i][i]);
    secondDiag.push(array[i][(pos -= 1)]);
  }
  let firstSum = firstDiag.reduce((acc, ele) => acc + ele);
  let secondSum = secondDiag.reduce((acc, ele) => acc + ele);
  return Math.abs(firstSum - secondSum);
}
// console.log(diagonalDifference(sample));

/**
 * -------------------
 * PLUS MINUS PROBLEM
 * -------------------
 * @link https://www.hackerrank.com/challenges/plus-minus/problem?isFullScreen=true
 */
// let sampleNums = [1, 1, 0, -1, -1];
let sampleNums = [-4, 3, -9, 0, 4, 1];

function plusMinus(arr) {
  // Write your code here
  let neg = [];
  let pos = [];
  let zero = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    arr[i] < 0
      ? neg.push(arr[i])
      : arr[i] > 0
      ? pos.push(arr[i])
      : zero.push(arr[i]);
  }
  console.log((pos.length / arr.length).toPrecision(7));
  console.log((neg.length / arr.length).toPrecision(7));
  console.log((zero.length / arr.length).toPrecision(7));
}

// plusMinus(sampleNums);

/**
 * ------------
 * MIN MAX SUM
 * ------------
 * @link https://www.hackerrank.com/challenges/mini-max-sum/problem?isFullScreen=true
 * 1/15 test cases failed :(
 */

let nums = [1, 2, 3, 4, 5];
function miniMaxSum(arr) {
  // Write your code here
  let maxNum = Math.max(...arr);
  let minNum = Math.min(...arr);
  let maxSum = 0;
  let minSum = 0;
  arr.forEach((num) => {
    if (num !== minNum) {
      maxSum += num;
    }
    if (num !== maxNum) {
      minSum += num;
    }
  });
  console.log(`${minSum} ${maxSum}`);
}

// miniMaxSum(nums);

/**
 * -----------------
 * BIRTHDAY CANDLES
 * -----------------
 * @link https://www.hackerrank.com/challenges/birthday-cake-candles/problem?isFullScreen=true
 */

let candles = [3, 2, 1, 3];
function birthdayCakeCandles(candles) {
  // Write your code here
  let tallest = Math.max(...candles);
  let tallestCount = 0;
  candles.forEach((candle) => {
    candle === tallest && (tallestCount += 1);
  });
  return tallestCount;
}
// console.log(birthdayCakeCandles(candles));

/**
 * -----------------
 * COMPARE TRIPLETS
 * -----------------
 */

a = [1, 3, 3];
b = [3, 2, 1];

function compareTriplets(a, b) {
  let al = 0;
  let bb = 0;
  let score = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      score[0] = al += 1;
    } else if (a[i] < b[i]) {
      score[1] = bb += 1;
    }
  }
  return score;
}
// console.log(compareTriplets(a, b));

// 12 13 14 15
// 0   1  2  3

/**
 * ----------------
 * TIME CONVERSION
 * ----------------
 * @link https://www.hackerrank.com/challenges/time-conversion/problem?h_r=next-challenge&h_v=zen&isFullScreen=false
 */

// let s = "07:05:45PM"; //19:05:45
// let s = "12:01:00PM"; //12:01:00
// let s = "12:01:00AM"; // 00:01:00
let s = "12:00:00AM"; // 00:01:00

function timeConversion(s) {
  // Write your code here
  s = s.toLowerCase();
  let flag = s.slice(-2);
  let hour = parseInt(s.slice(0, 2));
  let mins = s.slice(3, 5);
  let secs = s.slice(6, 8);
  let time = "";

  if (flag === "pm") {
    if (hour === 12 && mins <= 59) {
      time = `${hour}:${mins}:${secs}`;
    } else if (hour >= 1) {
      time = `${hour + 12}:${mins}:${secs}`;
    }
  }
  if (flag === "am") {
    if (hour === 12 && mins === "00") {
      time = `0${hour - 12}:${mins}:${secs}`;
    } else if (hour === 12 && mins >= 1) {
      time = `00:${mins}:${secs}`;
    } else if (hour < 10) {
      time = `0${hour}:${mins}:${secs}`;
    } else {
      time = `${hour}:${mins}:${secs}`;
    }
  }
  return time;
}

// console.log(timeConversion(s));

/**
 * -----------------
 * GRADING STUDENTS
 * -----------------
 * @link https://www.hackerrank.com/challenges/grading/problem?isFullScreen=true
 */

function gradingStudents(grades) {
  // Write your code here
  let newGrades = [];
  for (let grade of grades) {
    if (grade % 5 === 0 || grade < 38) {
      newGrades.push(grade);
    } else if ((grade + 2) % 5 === 0) {
      newGrades.push(grade + 2);
    } else if ((grade + 1) % 5 === 0) newGrades.push(grade + 1);
    else newGrades.push(grade);
  }
  return newGrades;
}
// console.log(gradingStudents([73, 67, 38, 10, 90, 5]));

/*
 * Complete the 'countApplesAndOranges' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER s
 *  2. INTEGER t
 *  3. INTEGER a
 *  4. INTEGER b
 *  5. INTEGER_ARRAY apples
 *  6. INTEGER_ARRAY oranges
 */

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here
}