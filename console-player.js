function getComputerChoice() {
    let randNum = Math.floor(Math.random() * 3) + 1;
    console.log(randNum);
    let choice;
    switch (randNum) {
        case 1:
            choice = "Rock";
            break;
        case 2:
            choice = "Paper";
            break;
        case 3:
            choice = "Scissors";
            break;
        default:
            choice = "Error";
    }
    return choice;
}

