// Exercise 11: Sum File Sizes in Folder
// Goal: list the entries in data-folder and sum the size of the files (ignore folders).
// Required:
//   fs.readdir(directoryPath, callback)  - get the entries
//   fs.lstat(filePath, callback)         - is it a file? (stats.isFile()) and its size (stats.size)
//   path.join(directoryPath, entryName)  - build the full path
// Print the total ONCE - only after all the lstat callbacks have finished.
//
// Expected output:
//   Total size: 2345 bytes
//
// Run: node ex11.js

const fs = require("fs");
const path = require("path");

const directoryPath = path.join(__dirname, "data-folder");

// write your code here

let sum = 0;
let completed = 0;

fs.readdir(directoryPath, (err, items) => {
  if (err) {
    console.log(err);
  }
  items.forEach((item) => {
    const file_path = path.join(directoryPath, item);
    fs.lstat(file_path, (err, stats) => {
      if (err) {
        console.log(err);
      }
      //if it is a file
      if (stats.isFile()) {
        sum += stats.size;
      }

      completed++;

      if (completed === items.length) {
        console.log(`Total size: ${sum} bytes`);
      }
    });
  });
});
