// typescript
import * as fs from 'fs';

const buf  = Buffer.alloc(8192);
console.log("Advent of Code Day 1!");
let file = fs.open("./input", "r", function(err, fd: number) {
    if (err) {
        return console.error(err);
    }
    console.log("File opened successfully!");
    console.log("Going to read file");
    fs.read(fd, buf, 0, buf.length, 0, function(err, bytes: number) {
        if (err) {
            console.log(err);
        }
        console.log(bytes + " bytes read");

        // Print only read bytes to avoid junk.
        if (bytes > 0) {
            console.log(buf.slice(0, bytes).toString());
        }
    });
});



console.log("Program Ended");
export {}
