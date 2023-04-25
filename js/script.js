

let gameRound = 0;
let playerScore = 0;
let computerScore = 0;

while (gameRound < 5) {
    playerSelection = prompt("Enter weapon (rock, paper, scissors):").toLowerCase();
    // computer choice
    function getComputerChoice() {
        let randomNumber = Math.floor(Math.random() * 3) + 1;
        if (randomNumber == 1) {
            return "rock";
        } else if (randomNumber == 2) {
            return "paper";
        } else {
            return "scissors"
        }
    }
    function game(playerSelection, computerSelection) {
        if (playerSelection == computerSelection) {
            return `You selected ${playerSelection}. Computer selected ${getComputerChoice()}. It's a tie.`
        } else if (playerSelection == "rock" && computerSelection == "paper"){
            return `You selected ${playerSelection}. Computer selected ${getComputerChoice()}. You lose.`
        } else if (playerSelection == "rock" && computerSelection == "scissors") {
            return `You selected ${playerSelection}. Computer selected ${getComputerChoice()}. You Win.`
        } else if (playerSelection == "paper" && computerSelection == "rock") {
            return `You selected ${playerSelection}. Computer selected ${getComputerChoice()}. You Win.`
        } else if (playerSelection == "paper" && computerSelection == "scissors") {
            return `You selected ${playerSelection}. Computer selected ${getComputerChoice()}. You lose.`
        } else if (playerSelection == "scissors" && computerSelection == "rock") {
            return `You selected ${playerSelection}. Computer selected ${getComputerChoice()}. You lose.`
        } else if (playerSelection == "scissors" && computerSelection == "paper") {
            return `You selected ${playerSelection}. Computer selected ${getComputerChoice()}. You win.`
        }
    }
    console.log(game(playerSelection, getComputerChoice()));
    gameRound++;
}






