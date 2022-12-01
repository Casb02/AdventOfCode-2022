import {Utils} from "../../index.js";

let input = Utils.getInput();
// let input = Utils.getExampleInput(1);
input = input.split("\n");


let groups = [];

let subGroup = [];
input.forEach((item) => {
    if (item === "\r") {
        subGroup = subGroup.map((item) => parseInt(item));
        groups.push(subGroup);
        subGroup = [];
    } else {
        subGroup.push(item);
    }
});

subGroup = subGroup.map((item) => parseInt(item));
groups.push(subGroup);

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

const topThree = (groups) => {
    let total = 0;
    for (let i = 0; i < 3; i++) {
        const hv = getHighestValue(groups);
        total += hv;
    }
    return total;
}


console.log(topThree(groups));
