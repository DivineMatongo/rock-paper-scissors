// Function used by computer to randomly select rock, paper, or scissors
function getComputerChoice() {
    let choice = Math.floor((Math.random() * 3));
    let choiceWords = ["Rock", "Paper", "Scissors"];
    return choiceWords[choice];
}

// Prompts user to enter rock, paper, or scissors, case-insensitive
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

// Returns: String "x" or "y", depending on whether the first or second
// argument wins, respectively, based on the rules of rock, paper, scissors.
// Expects: two string arguments, each either "rock", "paper", or "scissors"
function xVersusY(x, y) {
    try {
        x = x.toLowerCase();
        y = y.toLowerCase();
    } catch (error) {
        if (error instanceof TypeError)
            throw new TypeError("Function expects two String arguments");
        else
            throw error;
    }

    if (x === "rock") {
        if (y === "rock")
            return "draw";
        else if (y === "paper")
            return "y";
        else if (y === "scissors")
            return "x";

    } else if (x === "paper") {
        if (y === "paper")
            return "draw";
        else if (y === "rock")
            return "x";
        else if (y === "scissors")
            return "y";

    } else if (x === "scissors") {
        if (y === "scissors")
            return "draw";
        else if (y === "rock")
            return "y";
        else if (y === "paper")
            return "x";
    }
    throw new EvalError("Expected rock, paper, or scissors. Instead received " +
                        `'${x}' and '${y}'`);
}

// Plays five rounds with user, then displays winner 
function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    // Evaluates one round and displays the result on the console
    function playRound(humanChoice, computerChoice) {
        winner = xVersusY(humanChoice, computerChoice);
        if (winner === "x"){
            humanScore += 1;
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        } else if (winner === "y") {
            computerScore += 1;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        } else {
            console.log(`Draw. You both chose ${computerChoice}.`);
        }
    }

    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    console.log("--- GAME OVER ---");
    if (humanScore > computerScore)
        console.log("You win!");
    else if (computerScore > humanScore)
        console.log("You lose!");
    else
        console.log("It's a draw!");

    console.log(`You ${humanScore} - ${computerScore} Computer`);
}

// playGame();