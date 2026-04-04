let humanScore = 0;
let computerScore = 0;

// Buttons for choosing rock, paper, or scissors
const buttons = document.querySelector("#rps-buttons");
// Start button (or Quit while playing)
const playButton = document.querySelector("#play-quit");
// Paragraph elements used to display score and results to the player
const line1 = document.querySelector("#line1");
const line2 = document.querySelector("#line2");
const line3 = document.querySelector("#line3");

const TITLE = "Rock Paper Scissors";
const TARGET_MESSAGE = "First one to 5 wins!";
const START_MESSAGE = "Click Start to play.";
const PROMPT = "Rock Paper Scissors?";

// Function used by computer to randomly select rock, paper, or scissors
function getComputerChoice() {
    let choice = Math.floor((Math.random() * 3));
    let choiceWords = ["Rock", "Paper", "Scissors"];
    return choiceWords[choice];
}

/**  
* Determines which argument wins according to the rules of Rock Paper Scissors
*
* @param {string} x - Either "rock", "paper" or "scissors" case-insensitive
* @param {string} y - Either "rock", "paper" or "scissors" case-insensitive
* @returns {string} Either "x", "y" or "draw" to show result
*/
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

// Enables and disables buttons when game starts or stops
function startStopGame(start) {
    for (const btn of buttons.children) {
        btn.disabled = !start;
    }
    playButton.textContent = start ? "Quit" : "Start Game";
}

// Handler for Rock, Paper, or Scissors buttons
buttons.addEventListener("click", (e) => {
    let computerChoice = getComputerChoice();
    // Text on button pressed tells us human choice
    let humanChoice = e.target.textContent;

    winner = xVersusY(humanChoice, computerChoice);
    if (winner === "x") {
        humanScore += 1;
    } else if (winner === "y") {
        computerScore += 1;
    }

    if (humanScore >= 5 || computerScore >= 5) {
        // Game over
        if (winner === "x") {
            line1.textContent = `Great! ${humanChoice} beats ${computerChoice}`;
            line2.textContent = `You win ${humanScore} - ${computerScore}!`;
        } else if (winner === "y") {
            line1.textContent = `Sorry. ${computerChoice} beats ${humanChoice}`;
            line2.textContent = `You lost ${humanScore} - ${computerScore}`;
        }
        line3.textContent = "Play again?";
        startStopGame(false);
        humanScore = computerScore = 0;

    } else {
        // Game not yet over
        line1.textContent = `You ${humanScore} - ${computerScore} Computer`;
        if (winner === "x") {
            line2.textContent = `Great! ${humanChoice} beats ${computerChoice}`;
        } else if (winner === "y") {
            line2.textContent = `Sorry. ${computerChoice} beats ${humanChoice}`;
        } else {
            line2.textContent = `You both chose ${humanChoice}`;
        }
        line3.textContent = "";
    }
});

// Handler for button that starts and stops the game
playButton.addEventListener("click", () => {
    console.log(playButton.textContent);
    if (playButton.textContent === "Start Game") {
        startStopGame(true);
        line1.textContent = `You ${humanScore} - ${computerScore} Computer`;
        line2.textContent = PROMPT;
        line3.textContent = "";
    } else {
        startStopGame(false);
        line1.textContent = TITLE;
        line2.textContent = TARGET_MESSAGE;
        line3.textContent = START_MESSAGE;
        humanScore = computerScore = 0;
    }
});