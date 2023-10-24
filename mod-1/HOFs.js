//Lecture 10/24/23
//Imperative Code
const doubleAllNums = (arr) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const result = arr[i] * 2
    newArr.push(result)
  }
  return newArr;
 }
const doubledNumsOld = doubleAllNums([1, 5, 10]);

//Declaritive Code
const doubledNums = [1, 5, 10].map((num) => num * 2);

//.forEach method
let numbers = [1, 2, 3];
// const callback = (val, idx, arr) => {
//  console.log('Value at index:', val);
//  console.log('Current index:', idx);
//  console.log('Original array:', arr);
// };
// numbers.forEach(callback);

numbers.forEach((val, idx, arr) => {
  // console.log('Value at index:', val);
  // console.log('Current index:', idx);
  // console.log('Original array:', arr);
});

// Value at index: a
// Current index: 0
// Original array: [ 'a', 'b', 'c' ]
// Value at index: b
// Current index: 1
// Original array: [ 'a', 'b', 'c' ]
// Value at index: c
// Current index: 2
// Original array: [ 'a', 'b', 'c' ]

const fakeForEach = (arr, callbackFunction) => {
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    callbackFunction(value);
  }
}

//.map method
numbers = [10, 20, 30];
const callback = (val, idx, arr) => {
  console.log('cb: val, idx, arr:', val, idx, arr);
  return val * 100;
};

// const bigNumbers = numbers.map(callback);
// console.log('bigNumbers: ', bigNumbers);

// cb logs: val, idx, arr: 10 0 [ 10, 20, 30 ]
// …etc…

// bigNumbers:  [ 1000, 2000, 3000 ]

//.find method
const myNums = [2, 4, 7, 5];
const firstEvenValue = myNums.find((num) => num % 2);
console.log('firstOddValue', firstOddValue);
// 7

//.findIndex method
const firstOddValueIdx = myNums.findIndex((num) => num % 2);
console.log('firstOddValueIdx', firstOddValueIdx);
// 2