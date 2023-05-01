
let computerScore = 0;
let playerScore = 0;
let playerSelection;
let rock = document.querySelector(".rock-btn");
let paper = document.querySelector(".paper-btn");
let scissors = document.querySelector(".scissors-btn");
let result = document.querySelector(".result");
let winner = "";
let playAgain = document.querySelector(".play-again");
let playerWeapon = document.querySelector(".player-weapon");

// STEP 2: Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)
rock.addEventListener("click", function () {
    playerSelection = "Rock"
    document.querySelector(".player-choice-img").setAttribute("src", "./images/rock.png")
    playRound(playerSelection, getComputerChoice());
    console.log(playerSelection);
});

paper.addEventListener("click", function () {
    playerSelection = "Paper"
    document.querySelector(".player-choice-img").setAttribute("src", "./images/paper.png")
    playRound(playerSelection, getComputerChoice());
    console.log(playerSelection);
});


scissors.addEventListener("click", function () {
    playerSelection = "Scissors"
    document.querySelector(".player-choice-img").setAttribute("src", "./images/scissors.png")
    playRound(playerSelection, getComputerChoice());
    console.log(playerSelection);
});

playAgain.addEventListener("click", function() {
    computerScore = 0;
    playerScore = 0;
    playerWeapon.classList.remove("invisible");
    playAgain.classList.add("invisible");
    document.querySelector(".computer-score").textContent = `${computerScore}`;
    document.querySelector(".player-score").textContent = `${playerScore}`;
    result.textContent = "";
    document.querySelector(".computer-choice-img").setAttribute("src", "")
    document.querySelector(".player-choice-img").setAttribute("src", "")
})

// RANDOM COMPUTER CHOICE
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    let selection;
    if (randomNumber == 1) {
        document.querySelector(".computer-choice-img").setAttribute("src", "./images/rock.png")
        return selection = "Rock";
    } else if (randomNumber == 2) {
        document.querySelector(".computer-choice-img").setAttribute("src", "./images/paper.png")
        return selection = "Paper"
    } else {
        document.querySelector(".computer-choice-img").setAttribute("src", "./images/scissors.png")
        return  selection = "Scissors"
    }
}


function playRound(playerSelection, computerSelection) {
    if (!(isGameOver())) {
        if (playerSelection === computerSelection) {
            winner = "No one wins this round.";
        } else if (playerSelection === "Rock" && computerSelection === "Paper"){
            computerScore++;
            document.querySelector(".computer-score").textContent = `${computerScore}`;
            winner = "Computer wins this round.";
        } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
            playerScore++;
            document.querySelector(".player-score").textContent = `${playerScore}`;
            winner = "Player wins this round."
        } else if (playerSelection === "Paper" && computerSelection === "Rock") {
            playerScore++;
            document.querySelector(".player-score").textContent = `${playerScore}`;
            winner = "Player wins this round."
        } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
            computerScore++;
            document.querySelector(".computer-score").textContent = `${computerScore}`;
            winner = "Computer wins this round";
        } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
            computerScore++;
            document.querySelector(".computer-score").textContent = `${computerScore}`;
            winner = "Computer wins this round";
        } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
            playerScore++
            document.querySelector(".player-score").textContent = `${playerScore}`;
            winner = "Player wins this round."
        }
        result.textContent = `${winner}`;
    }
    

    if (isGameOver()) {
        if (playerScore > computerScore) {
            result.textContent = "Player is the Champion!!"
        } else {
            result.textContent = "Computer is the Champion"
        }
    }

    if (isGameOver()) {
        playerWeapon.classList.add("invisible");
        playAgain.classList.remove("invisible");
    }
}



function isGameOver() {
    return computerScore == 5 || playerScore == 5;
}

