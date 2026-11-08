// Exercise 5: System Free Memory Logger
// Goal: every 2 seconds, calculate and print the free memory percentage. Stop after 5 logs.
// Required: os.freemem(), os.totalmem(), setInterval(callback, delay), clearInterval(intervalId)
//
// Expected output:
//   Free Memory: 73.25%
//   Free Memory: 72.91%
//   Free Memory: 72.80%
//   Free Memory: 72.75%
//   Free Memory: 72.60%
//   Memory logging complete.
//
// Run: node ex05.js

const os = require("os");

// write your code here

let counter = 0;

const interval_id = setInterval(() => {
  const free_memory = (os.freemem() / os.totalmem()) * 100;
  console.log(`Free Memory: ${free_memory.toFixed(2)}%`);

  counter++;
  if (counter === 5) {
    console.log("Memory logging complete.");
    clearInterval(interval_id);
  }
}, 2000);
