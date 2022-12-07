import fs from "fs";

let input = fs.readFileSync("./input/input.txt", "utf8");
const arrayInput = input.split("\r\n").map(x => x.split(" "));
function calculateScore(hands) {
    let totalScore = 0;

}

console.log(calculateScore(arrayInput));