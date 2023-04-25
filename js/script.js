
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
            return `You selected ${playerSelection}. Computer selected ${computerSelection}. You lose.`
        } else if (playerSelection === "rock" && computerSelection === "scissors") {
            return `You selected ${playerSelection}. Computer selected ${computerSelection}. You Win.`
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            return `You selected ${playerSelection}. Computer selected ${computerSelection}. You Win.`
        } else if (playerSelection === "paper" && computerSelection === "scissors") {
            return `You selected ${playerSelection}. Computer selected ${computerSelection}. You lose.`
        } else if (playerSelection === "scissors" && computerSelection === "rock") {
            return `You selected ${playerSelection}. Computer selected ${computerSelection}. You lose.`
        } else if (playerSelection === "scissors" && computerSelection === "paper") {
            return `You selected ${playerSelection}. Computer selected ${computerSelection}. You win.`
        }
    }
    
    // print in the console the roun result
    console.log(game(playerSelection, computerSelection));
}






