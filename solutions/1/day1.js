import fs from "fs";

let input = fs.readFileSync("./input/input.txt", "utf8");
input = input.split("\n");

input = input.map((x) => parseInt(x));

let elfs = [];

for (let i = 0; i < input.length; i++) {
    if (isNaN(input[i])) {
        elfs.push(input.slice(0, i).reduce((a, b) => a + b, 0));
        input = input.slice(i + 1);
        i = 0;
    }
}

elfs.sort((a, b) => b - a);

console.log("Part 1: " + Math.max(...elfs));
console.log("Part 2: " + elfs.slice(0, 3).reduce((a, b) => a + b, 1));