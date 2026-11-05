// Exercise 4: Random Line from File
// Goal: read quotes.txt using a callback, split it into lines, ignore empty lines and print a random one.
// Required: fs.readFile(filePath, callback)
//
// Expected output (random on each run):
//   Random Line: Stay positive.
//
// Run: node ex04.js

const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "quotes.txt");

// write your code here

fs.readFile(filePath, "utf-8", (err, data) => {
  if (err) {
    console.log(err.message);
  }

  const splited_data = data.split(/\r?\n/);

  const not_empty_lines = splited_data.filter((line) => {
    return line.trim() !== "";
  });

  const random_index = Math.floor(Math.random() * not_empty_lines.length);
  console.log(`Random Line: ${not_empty_lines[random_index]}`);
});
