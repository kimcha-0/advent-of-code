// typescript
const fs = require("fs");
console.log("Advent of Code Day 1!");
let data = fs.readFile("./input");
console.log("Synchronous read: " + data.toString());
console.log("Program Ended");
