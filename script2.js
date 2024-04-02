// DO THE BELOW QUESTION IN ARROW FUNCTIONS
//QUESTION:2

//A)rint odd numbers in an array:
const printOddNumbers = arr => arr.filter(num => num % 2 !== 0).forEach(num => console.log(num));
printOddNumbers([1, 2, 3, 4, 5]);
console.log("----------------------------");
//--------------------------------------------------------------------
//B)Convert all the strings to title caps in a string array:
const convertToTitleCaps = arr => arr.map(str => str.charAt(0).toUpperCase() + str.slice(1));
console.log(convertToTitleCaps(["apple", "banana", "cherry"]));
console.log("----------------------------");
//----------------------------------------------------------------------
//C)Sum of all numbers in an array:
const sumOfNumbers = arr => arr.reduce((sum, num) => sum + num, 0);
console.log(sumOfNumbers([1, 2, 3, 4, 5]));
console.log("----------------------------");
//-----------------------------------------------------------------------
//D)Return all the prime numbers in an array:
const isPrime = num => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };
  
  const getPrimeNumbers = arr => arr.filter(num => isPrime(num));
  console.log(getPrimeNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]));
  console.log("----------------------------");
//---------------------------------------------------------------------------
//E)Return all the palindromes in an array:
const isPalindrome = str => str === str.split('').reverse().join('');
const getPalindromes = arr => arr.filter(word => isPalindrome(word));
console.log(getPalindromes(["level", "hello", "radar", "world"]));
console.log("----------------------------");
