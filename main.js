function getComputerChoice() {
    choice = Math.floor((Math.random() * 3));
    choiceWords = ["Rock", "Paper", "Scissors"];
    return choiceWords[choice];
}