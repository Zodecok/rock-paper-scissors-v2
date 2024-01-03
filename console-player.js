function getComputerChoice() {
    let randNum = Math.floor(Math.random() * 3);
    console.log(randNum);
    let choice;
    switch (randNum) {
        case 0:
            choice = "Rock";
            break;
        case 1:
            choice = "Paper";
            break;
        case 2:
            choice = "Scissors";
            break;
        default:
            choice = "Error";
    }
    return choice;
}

function round(playerSelection, computerSelection) {
    let playerValue = valueFromWord(playerSelection);
    let computerValue = valueFromWord(computerSelection);
    let compare = playerValue - computerValue;
    let winner;
    // 0 is tie, 1 is player, -1 is computer
    if (compare == 1 || (compare == 2 && playerValue == 2)) {
        winner = 1;
    } else if (compare = 0) {
        winner = 0;
    } else {
        winner = -1;
    }

}

function valueFromWord(word) {
    // default is rock
    let value = 0;
    if (word.toLowerCase() === "paper") {
        value = 1;
    } else if (word.toLowerCase() === "scissors") {
        value = 2;
    }
    return value;
}

function wordFromValue(value) {
    let word;
    switch (value) {
        case 1:
            word = "Paper";
            break;
        case 2:
            word = "Scissors";
            break;
        default:
            word = "Rock";
    }
    return word;
}

