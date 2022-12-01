import {Utils} from "../../index.js";

let input = Utils.getInput();
// let input = Utils.getExampleInput(1);
input = input.split("\n");


let elfs = [];


let calories = [];
input.forEach((item) => {
    if (item === "\r") {
        calories = calories.map((item) => parseInt(item));
        elfs.push(calories);
        calories = [];
    } else {
        calories.push(item);
    }
});

calories = calories.map((item) => parseInt(item));
elfs.push(calories);

const getHighestValue = (groups) => {
    let highestValue = 0;
    let highestValueIndex = 0;
    for (let items in groups) {
        let group = groups[items];

        let total = 0;
        for (let item in group) {
            total += group[item];
        }

        if (total > highestValue) {
            highestValue = total;
            highestValueIndex = items;
        }
    }

    groups.splice(highestValueIndex, 1);

    return highestValue;
}

const getTopThree = (groups) => {
    let total = 0;
    for (let i = 0; i < 3; i++) {
        total += getHighestValue(groups);
    }
    return total;
}


console.log(getTopThree(elfs));
