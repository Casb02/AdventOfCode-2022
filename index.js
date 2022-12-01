import fs from "fs";
class Utils {
    static getInput() {
        return fs.readFileSync("./input/input.txt", "utf8");
    }
     static getInputAsArray() {
        return Utils.getInput().split("\r");
    }

    static getExampleInput(part) {
        return fs.readFileSync(`./input/example-p${part}.txt`, "utf8");
    }

    static getExampleInputAsArray(part) {
        return Utils.getExampleInput(part).split("\r");
    }

}

export { Utils };