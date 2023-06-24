let counterPlayer = 0;
let counterComp = 0;

const buttons = document.querySelectorAll('.button');
const playerScore = document.querySelector("div.player-score");
const compScore = document.querySelector("div.comp-score");
const gameResult = document.querySelector("div.game-result");

gameResult.textContent = "";

buttons.forEach(button => { button.addEventListener('click', handleEvent);});

function handleEvent(e) {

    playRound(e.target.textContent, getComputerChoice());
    playerScore.textContent = "Player: " + counterPlayer;
    compScore.textContent = "Computer: " + counterComp;
    checkWin();
}

function getComputerChoice() {

    let choice = Math.floor(Math.random() * 3);

    switch (choice) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {

        gameResult.textContent = "Tie game! Computer also chose " + playerSelection + ".";
    }

    else if ((playerSelection === "rock" && computerSelection === "paper") || 
             (playerSelection === "paper" && computerSelection === "scissors") ||
             (playerSelection === "scissors" && computerSelection === "rock")) {

        gameResult.textContent = "You Lose! Computer chose " + computerSelection + " which beats " + playerSelection + ".";
        counterComp += 1;
    }

    else if ((playerSelection === "rock" && computerSelection === "scissors") ||
            (playerSelection === "paper") && (computerSelection === "rock") ||
            (playerSelection === "scissors" && computerSelection === "paper")) {

        gameResult.textContent = "You Win! Computer chose " + computerSelection + " which is beated by " + playerSelection + ".";
        counterPlayer += 1;
    }
}

function checkWin () {
    
    if (counterPlayer == 5 || counterComp == 5) {

        buttons.forEach(button => { button.removeEventListener('click', handleEvent);});
    
        if (counterPlayer > counterComp) {
            gameResult.textContent = "You Win the Game! Restart the game to play again";
            gameResult.style.color = 'green';
            gameResult.style.fontWeight = "700";
        }

        else if (counterPlayer < counterComp) {
            gameResult.textContent = "You lose! Restart the game to play again";
            gameResult.style.color = 'red';
            gameResult.style.fontWeight = "700";
        }

        else if (counterPlayer == counterComp) {
            gameResult.textContent = "You tied with the computer! Restart the game to play again";
            gameResult.style.fontWeight = "700";
        }
    }
}