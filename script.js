// 1. Write a range function that takes two arguments, start and end, and returns an array
// containing all the numbers from start up to (and including) end.
// Example output:
// console.log(range(1, 10)); // outputs [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let start = 1; // Start of the range
let end = 10; // End of the range

function customRange(startPoint, endPoint) {
  let values = [];

  for (let num = startPoint; num <= endPoint; num++) {
    values.push(num);
  }

  return values; // Return the array of numbers from startPoint to endPoint
}

console.log(customRange(start, end));

// 2. Next, write a sum function that takes an array of numbers and returns the sum of
// these numbers. Run the example program and see whether it does indeed return 55.
// Example output:
// console.log(sum(range(1, 10))); // returns 55

let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function calculateSum(arr) {
  let sumTotal = 0;

  for (let index = 0; index < arr.length; index++) {
    sumTotal += arr[index];
  }

  return sumTotal; // Return the total sum of the array
}

console.log(calculateSum(numbersArray));

// 3. Arrays have a reverse method that changes the array by inverting the order in which
// its elements appear. For this exercise, write two functions, reverseArray and
// reverseArrayInPlace. The first, reverseArray, takes an array as an argument and
// produces a new array that has the same elements in the inverse order. The second,
// reverseArrayInPlace, does what the built-in reverse method does: it modifies the array
// given as an argument by reversing its elements. Neither may use the standard reverse
// method.
// Example output for reverseArray:
// console.log(reverseArray(["A", "B", "C"])); // outputs ["C", "B", "A"];
// Example output for reverseArrayInPlace:
// let arrayValue = [1, 2, 3, 4, 5];
// reverseArrayInPlace(arrayValue);
// console.log(arrayValue); // outputs [5, 4, 3, 2, 1]

// Create a new array with reversed elements
function invertArray(originalArray) {
  let flippedArray = [];
  for (let index = originalArray.length - 1; index >= 0; index--) {
    flippedArray.push(originalArray[index]); // Add elements to the new array in reverse order
  }
  return flippedArray;
}

// Reverse the array in place without creating a new one
function reverseArrayDirectly(modifiableArray) {
  let leftIndex = 0;
  let rightIndex = modifiableArray.length - 1;

  while (leftIndex < rightIndex) {
    let temp = modifiableArray[leftIndex]; // Temporarily hold the value at the left index
    modifiableArray[leftIndex] = modifiableArray[rightIndex]; // Swap values
    modifiableArray[rightIndex] = temp; // Complete the swap

    leftIndex++; // Move to the next position on the left
    rightIndex--; // Move to the next position on the right
  }
}

console.log(invertArray(["A", "B", "C"])); // Output: ["C", "B", "A"]

let arrayExample = [1, 2, 3, 4, 5];
reverseArrayDirectly(arrayExample);
console.log(arrayExample); // Output: [5, 4, 3, 2, 1]
