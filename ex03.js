// Exercise 3: Countdown Timer
// Goal: print a countdown from 5 to 0, one number per second, using recursion + setTimeout.
// (no loops, no setInterval)
//
// Expected output:
//   5
//   4
//   3
//   2
//   1
//   0
//   Time's up!
//
// Run: node ex03.js

// write your code here

function repeat(counter) {
  if (counter === 0) {
    console.log(String(counter));
    console.log("Time's up!");
    return;
  }
  console.log(String(counter));
  setTimeout(() => {
    repeat(counter - 1);
  }, 1000);
}

repeat(5);
