function getComputerChoice(min, max) {
    /*
    choose a random number from 1 to 3 ( 1 or 2 or 3)
    choose a random number between 1 or 2
    Math.random() gives random between 0 and 1
    Math.floor(Math.random()*10) gives random between 0 and 9 

    Math.floor(Math.random() * (max - min + 1) + min);
    Math.floor(Math.random() * (3 - 1 + 1) + 1)
    */
   
    min = Math.ceil(min);
    max = Math.floor(max);
    let choice = Math.floor(Math.random() * (max - min + 1) + min);
    if (choice === 1) {
        return "rock";
    }
    else if (choice === 2) {
        return "paper";
    }
    else if (choice === 3) {
        return "scissors";
    }
}

function playGame(playerSelection, computerSelection) {
    let choice = playerSelection.toLowerCase();
    if (choice === computerSelection) {
        return "Draw";
    }

    else if ((choice === "rock" && computerSelection === "scissors") || 
            (choice === "scissors" && computerSelection === "paper") ||
            (choice === "paper" && computerSelection === "rock")) {
        return `You Win! ${choice.charAt(0).toUpperCase() + choice.slice(1)} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`;
    }

    else if ((choice === "paper" && computerSelection === "scissors") ||
            (choice === "scissors" && computerSelection === "rock") || 
            (choice === "rock" && computerSelection === "paper")) {
        return `You Lose! ${choice.charAt(0).toUpperCase() + choice.slice(1)} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`;
    }
}

function game(round) {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 1; i <= round; i++) {
        const computerSelection = getComputerChoice(1, 3);
        console.log(computerSelection);
        const playerSelection = prompt("Rock, Paper, or Scissors? ");

        console.log(playGame(playerSelection, computerSelection));

        const result = playGame(playerSelection, computerSelection);
        if (result.charAt(4) === "W") {
            playerScore += 1;
        }
        else if (result.charAt(4) === "L") {
            computerScore += 1;
        }
        console.log(`User's Score: ${playerScore}, Computer's Score: ${computerScore} `);
    }
    
    if (playerScore > computerScore) {
        console.log(`You win against Computer in a ${round}-round game :D`);
    }
    else if (playerScore < computerScore) {
        console.log(`You lose against Computer in a ${round}-round game :(`);
    }
    else if (playerScore === computerScore) {
        console.log("Tis but a draw :|");
    }
}

const round = +prompt("How many rounds of Rock-Paper-Scissors?");

game(round);

