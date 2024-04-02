//DO THE BELOW PROGRAMS IN ANONYMOUS FUNCTION & IIFE
// QUESTION :1

// A)Print odd numbers in an array:
(function(arr) {
    arr.filter(num => num % 2 !== 0).forEach(num => console.log(num));
  })([1, 2, 3, 4, 5, 6, 7]);
  console.log("----------------------------");
//----------------------------------------------------------
//B)Convert all the strings to title caps in a string array
(function(strings) {
    strings.map(str => str.charAt(0).toUpperCase() + str.slice(1)).forEach(str => console.log(str));
  })(['apple', 'banana', 'orange']);
  console.log("----------------------------");
//------------------------------------------------------------
//C)Sum of all numbers in an array:
let sum = (function(arr) {
    return arr.reduce((total, num) => total + num, 0);
  })([1, 2, 3, 4, 5]);
  console.log(sum);
  console.log("----------------------------");
//--------------------------------------------------------
//D)Return all the prime numbers in an array:
let primes = (function(arr) {
    return arr.filter(num => {
      for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
      }
      return num > 1;
    });
  })([2, 3, 4, 5, 6, 7, 8, 9]);
  console.log(primes);
  console.log("----------------------------");
//------------------------------------------------------------
//E)Return all the palindromes in an array:
let palindromes = (function(arr) {
    return arr.filter(str => str === str.split('').reverse().join(''));
  })(['level', 'hello', 'madam', 'world']);
  console.log(palindromes);
  console.log("----------------------------");
//------------------------------------------------------------
//F)Return median of two sorted arrays of the same size:
let median = (function(arr1, arr2) {
    let merged = arr1.concat(arr2);
    let sorted = merged.sort((a, b) => a - b);
    let len = sorted.length;
    //[using ternary method]
    return len % 2 === 0 ? (sorted[len / 2 - 1] + sorted[len / 2]) / 2 : sorted[Math.floor(len / 2)];
  })([1, 3, 5], [2, 4, 6]);
  console.log(median);
  console.log("----------------------------");
//-----------------------------------------------------------------
//G)Remove duplicates from an array:
let uniqueArray = (function(arr) {
    return [...new Set(arr)];
  })([1, 2, 2, 3, 4, 4, 5]);
  console.log(uniqueArray);
  console.log("----------------------------");
//-------------------------------------------------------------
//H)Rotate an array by k times:
let rotateArray = (function(arr, k) {
    k = k % arr.length;
    let rotated = arr.slice(k).concat(arr.slice(0, k));
    console.log(rotated);
  })([1, 2, 3, 4, 5], 2);
  console.log("----------------------------");
  
