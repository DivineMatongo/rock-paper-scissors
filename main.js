function getComputerChoice() {
    let choice = Math.floor((Math.random() * 3));
    let choiceWords = ["Rock", "Paper", "Scissors"];
    return choiceWords[choice];
}

function getHumanChoice() {
    let message = "Rock, paper, or scissors?";
    let choice;
    while (true) {
        choice = prompt(message).toUpperCase().trim();
        if ((choice === "ROCK") || (choice === "R")) {
            return "Rock";
        } else if ((choice === "PAPER") || (choice === "P")) {
            return "Paper";
        } else if ((choice === "SCISSORS") || (choice === "S")) {
            return "Scissors";
        } else {
            message = "Invalid input. Please try again.\n" +
                       "Rock, paper, or scissors?";
        }
    }
}