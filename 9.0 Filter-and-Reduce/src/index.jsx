//Map -Create a new array by doing something with each item in an array.
// var numbers = [3, 56, 2, 48, 5];

// var newNumbers = numbers.map(function(x) {
//     return x * 2;
// });

// console.log(newNumbers);

//Filter - Create a new array by keeping the items that return true.
// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// var evenNumbers = numbers.filter(function(num) {
//     return num % 2 === 0;           
// });     

// console.log(evenNumbers);

//Reduce - Accumulate a value by doing something to each item in an array.
// var nums = [0, 2, 4, 6, 8, 10];

// var newNum = nums.reduce(
//     function (accumulator, currentNumber) {
//     return accumulator / currentNumber;
// });

// console.log(newNum);


//Find - find the first item that matches from an array.
// var numbers = [3, 56, 2, 48, 5];

// var newNumbers = numbers.find(
//     function(x) {
//     return x > 10;
// });

// console.log(newNumbers);

//FindIndex - find the index of the first item that matches.

// var numbers = [3, 56, 2, 48, 5];

// var newNumbers = numbers.findIndex(
//     function(x) {
//     return x > 10;
// });

// console.log(newNumbers);
import React from "react";
import ReactDOM from "react-dom/client";
import emojipedia from "./emojipedia";

var emojiMeaning = emojipedia.map(function (emoji) {
    return emoji.meaning.substring(0, 100);
});

console.log(emojiMeaning);

ReactDOM.createRoot(document.getElementById("root")).render(
    <div>
     
      <h1>Emojipedia</h1>
  </div>
);
 