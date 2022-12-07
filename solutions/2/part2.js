import fs from "fs";

let input = fs.readFileSync("./input/input.txt", "utf8");

function calculateTotalScore(hands) {
    // Initialize total score to 0
    let totalScore = 0;

    // Loop through each round in the strategy
    for (let i = 0; i < hands.length; i++) {
        // Parse the opponent's choice and the desired outcome
        let opponentChoice = hands[i][0];
        let desiredOutcome = hands[i][1];

        // Initialize the score for this round to 0
        let roundScore = 0;

        // Calculate the score for this round based on the opponent's choice
        // and the desired outcome
        switch (opponentChoice) {
            case 'A':
                // If the opponent chooses Rock, choose Rock if the desired outcome
                // is a draw, choose Paper if the desired outcome is a win, and choose
                // Scissors if the desired outcome is a loss
                if (desiredOutcome === 'Y') {
                    roundScore = 1 + 3; // Rock + draw
                } else if (desiredOutcome === 'Z') {
                    roundScore = 2 + 6; // Paper + win
                } else if (desiredOutcome === 'X') {
                    roundScore = 3 + 0; // Scissors + loss
                }
                break;
            case 'B':
                // If the opponent chooses Paper, choose Paper if the desired outcome
                // is a draw, choose Scissors if the desired outcome is a win, and choose
                // Rock if the desired outcome is a loss
                if (desiredOutcome === 'Y') {
                    roundScore = 2 + 3; // Paper + draw
                } else if (desiredOutcome === 'Z') {
                    roundScore = 3 + 6; // Scissors + win
                } else if (desiredOutcome === 'X') {
                    roundScore = 1 + 0; // Rock + loss
                }
                break;
            case 'C':
                // If the opponent chooses Scissors, choose Scissors if the desired outcome
                // is a draw, choose Rock if the desired outcome is a win, and choose
                // Paper if the desired outcome is a loss
                if (desiredOutcome === 'Y') {
                    roundScore = 3 + 3; // Scissors + draw
                } else if (desiredOutcome === 'Z') {
                    roundScore = 1 + 6; // Rock + win
                } else if (desiredOutcome === 'X') {
                    roundScore = 2 + 0; // Paper + loss
                }
                break;
        }

        // Add the score for this round to the total score
        totalScore += roundScore;
    }

    // Return the total score
    return totalScore;
}

const arrayInput = input.split("\r\n").map(x => x.split(" "));

let totalScore = calculateTotalScore(arrayInput);
console.log(totalScore);