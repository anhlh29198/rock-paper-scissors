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
    else {
        return "scissors";
    }
}

const computerSelection = getComputerChoice(1, 3);
console.log(computerSelection);
let playerSelection = prompt("Rock, Paper, or Scissors? ");

console.log(playGame(playerSelection, computerSelection));

function playGame(playerSelection, computerSelection) {
    let choice = playerSelection.toLowerCase();
    if (choice === computerSelection) {
        return "Draw";
    }

    else if (choice === "rock" && computerSelection === "scissors") {
        return "You Win! Rock beats Scissors";
    }
    else if (choice === "scissors" && computerSelection === "paper") {
        return "You Win! Scissors beats Paper";
    }
    else if (choice === "paper" && computerSelection === "rock") {
        return "You Win! Paper beats Rock";
    }

    else if (choice === "paper" && computerSelection === "scissors") {
        return "You Lose! Scissors beats Paper";
    }
    else if (choice === "scissors" && computerSelection === "rock") {
        return "You Lose! Rock beats Scissors";
    }
    else if (choice === "rock" && computerSelection === "paper") {
        return "You Lose! Paper beats Rock";
    }
}