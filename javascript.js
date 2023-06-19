console.log("Let's play Rock, Paper, Scissors!");

// Gets computers choice randomly

function getComputerChoice() {

    let choice = Math.floor(Math.random() * 2);

    if (choice == 0) {
        return "rock";
    }

    else if (choice == 1) {
        return "paper";
    }

    else if (choice == 2) {
        return "scissors";
    }
}

// Plays the round and determines win and lose conditions, returns game outcome statement

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();
    
    // All tie conditions (Rock vs. Rock, Paper vs. Paper, Scissors vs. Scissors)
    if (playerSelection === computerSelection) {

        console.log("Tie game! Computer also chose " + playerSelection + ".");

    }

    else if ((playerSelection === "rock") && (computerSelection === "paper")) {

        console.log("You Lose! Computer chose " + computerSelection + " which beats " + playerSelection);
        countercomp += 1;
    }

    else if ((playerSelection === "rock") && (computerSelection === "scissors")) {

        console.log("You Win! Computer chose " + computerSelection + " which is beated by " + playerSelection);
        counterplayer += 1;
    }

    else if ((playerSelection === "paper") && (computerSelection === "rock")) {

        console.log("You Win! Computer chose " + computerSelection + " which is beated by " + playerSelection);
        counterplayer += 1;
    }

    else if ((playerSelection === "paper") && (computerSelection === "scissors")) {

        console.log("You Lose! Computer chose " + computerSelection + " which beats " + playerSelection);
        countercomp += 1;
    }

    else if ((playerSelection === "scissors") && (computerSelection === "rock")) {

        console.log("You Lose! Computer chose " + computerSelection + " which beats " + playerSelection);
        countercomp += 1;
    }

    else if ((playerSelection === "scissors") && (computerSelection === "paper")) {

        console.log("You Win! Computer chose " + computerSelection + " which is beated by " + playerSelection);
        counterplayer += 1;
    }
    
}

// Initialize game, get player and computer choice and invoke the game

function game() {

    const playerSelection = prompt("Please enter Rock, Paper or Scissor.")
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
}

// Set global variables to keep score 

let counterplayer = 0;
let countercomp = 0;

// Play the game 5 times

for (let i = 0; i <= 4; i++) {

    game();
}

// The following determines who wins best of 5 games.

if (counterplayer == countercomp) {

    console.log("Tie Game!");
}

else if (counterplayer > countercomp) {
    
    console.log("Player Wins!");
}

else if (counterplayer < countercomp) {
    
    console.log("Computer Wins!");
}