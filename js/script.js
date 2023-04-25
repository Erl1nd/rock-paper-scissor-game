let playerScore = 0;
let computerScore = 0;
// loop until 5 rounds
for (gameRound = 0; gameRound < 5; gameRound++) {
    // player and computer choice
    let playerSelection = prompt("Enter weapon (rock, paper, scissors):").toLowerCase();
    let computerSelection = getComputerChoice();

    // computer choice
    function getComputerChoice() {
        let randomNumber = Math.floor(Math.random() * 3) + 1;
        let weapon;
        if (randomNumber == 1) {
            weapon = "rock";
        } else if (randomNumber == 2) {
            weapon = "paper"
        } else {
            weapon = "scissors"
        }

        return weapon;
    }

    // game
    function game(playerSelection, computerSelection) {
        if (playerSelection === computerSelection) {
            return `You selected ${playerSelection}. Computer selected ${computerSelection}. It's a tie.`
        } else if (playerSelection === "rock" && computerSelection === "paper"){
            computerScore++;
            return `You selected ${playerSelection}. Computer selected ${computerSelection}. You lose.`
        } else if (playerSelection === "rock" && computerSelection === "scissors") {
            playerScore++;
            return `You selected ${playerSelection}. Computer selected ${computerSelection}. You Win.`
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            playerScore++;
            return `You selected ${playerSelection}. Computer selected ${computerSelection}. You Win.`
        } else if (playerSelection === "paper" && computerSelection === "scissors") {
            computerScore++;
            return `You selected ${playerSelection}. Computer selected ${computerSelection}. You lose.`
        } else if (playerSelection === "scissors" && computerSelection === "rock") {
            computerScore++;
            return `You selected ${playerSelection}. Computer selected ${computerSelection}. You lose.`
        } else if (playerSelection === "scissors" && computerSelection === "paper") {
            playerScore++;
            return `You selected ${playerSelection}. Computer selected ${computerSelection}. You win.`
        }
    }
    
    // print in the console the roun result
    console.log(game(playerSelection, computerSelection));
}

let whoWin;
if (playerScore > computerScore) {
    whoWin = "Congratulations, you win!";
} else if (playerScore < computerScore) {
    whoWin = "Too bad, computer wins";
} else {
    whoWin = "It's a tie. Try to play another game."
}
console.log(`After 5 rounds. Player: ${playerScore}. Computer: ${computerScore}. ${whoWin}`)






