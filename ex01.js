// Exercise 1: File Reader with Stats
// Goal: read the content of sample.txt. After reading, get and print the file size (bytes) and creation date.
// Required: fs.readFile(filePath, callback), fs.stat(filePath, callback) - callbacks only.
//
// Expected output:
//   File Content:
//   Hello world, welcome to Node.js!
//
//   Size: 35 bytes
//   Created At: 2025-06-27T15:40:12.000Z
//
// Run: node ex01.js

const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "sample.txt");

fs.readFile(filePath, "utf-8", (err, data) => {
  if (err) {
    console.error(err.message);
  }

  console.log("File Content:");
  console.log(data);

  fs.stat(filePath, (err, data) => {
    if (err) {
      console.error(err.message);
    }

    console.log(`Size: ${data.size} bytes`);
    console.log(`Created At: ${data.birthtime}`);
  });
});
