function getComputerChoice() {
    let randNum = Math.floor(Math.random() * 3);
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
    if (compare == 1 || (compare == -2 && playerValue == 0)) {
        winner = 1;
    } else if (compare == 0) {
        winner = 0;
    } else {
        winner = -1;
    }

    let output;
    switch (winner) {
        case -1:
            console.log(`You lose! ${wordFromValue(computerValue)} beats ${wordFromValue(playerValue)}`);
            break;
        case 1:
            console.log(`You win! ${wordFromValue(playerValue)} beats ${wordFromValue(computerValue)}`);
            break;
        default:
            console.log("Tie!");
    }
    return winner;
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

// need to have a function that runs that whole game
// and give that to each of the buttons to generate
// a computer and then do the assignment

function btnSetUp(e) {
    let result = round(e.target.id, getComputerChoice());
    console.log(results);
    let log = "messed";
    // 0 is tie, 1 is player, -1 is computer
    switch (result) {
        case 0:
            log = "This was a tie in btnset";
            results["ties"] += 1;
            break;
        case 1:
            log = "This is a win for player in btnset";
            results["wins"] += 1;
            break;
            
        case -1:
            log = "This is a loss for player in btnset";
            results["losses"] += 1;
            break;
        default:
            log = "This did not work in btnset";
            alert("something didn't work");
    }
    document.querySelector("#output").textContent = log;
    update();
}

function update() {
    const spans = Array.from(document.querySelectorAll("div>span.results"));
    spans.forEach((el, i) => el.textContent = Object.values(results)[i]);
    spans.forEach((element, index) => console.log(`el:${element}, index:${index}`));
    Object.values(results).forEach(value => {
        if (value >= maxGames) {
            document.querySelector("#output").textContent = "Game Finished";
            Array.from(document.querySelectorAll("button")).forEach(btn => btn.disabled = true);
        };
    });
}

function game() {

    let score = [0, 0];
    // player then computer
    while (score[0] < 5 || score[1] < 5) {
        let result = 0;
        while (result == 0) {
            let playerSelection = prompt("What is your play?", "Error");
            result = round(playerSelection, getComputerChoice());
        }
        let pos = (result > 0) ? 0 : 1;
        score.splice(pos, 1, score[pos] + 1);
    }
    console.log(`Player has won: ${score[0]} times\nComputer has won: ${score[1]} times`);
}

let results = {"wins": 0, "ties": 0, "losses": 0};
let maxGames = 5;
const btns = document.querySelectorAll("button");
btns.forEach(btn => btn.addEventListener('click', btnSetUp));