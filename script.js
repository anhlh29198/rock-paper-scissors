/*This function generates a random choice between rock, paper, scissors for 
the computer*/

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

/*This function runs a game of 1 round and compare user choice vs computer's*/

function playRound(playerChoice, computerChoice) {
    let choice = playerChoice.toLowerCase();
    if (choice === computerChoice) {
        console.log("Draw");
        return "0";
    }

    else if ((choice === "rock" && computerChoice === "scissors") || 
            (choice === "scissors" && computerChoice === "paper") ||
            (choice === "paper" && computerChoice === "rock")) {
        console.log(`You Win! ${choice.charAt(0).toUpperCase() + choice.slice(1)} beats ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`);
        return "1";
    }

    else if ((choice === "paper" && computerChoice === "scissors") ||
            (choice === "scissors" && computerChoice === "rock") || 
            (choice === "rock" && computerChoice === "paper")) {
        console.log(`You Lose! ${choice.charAt(0).toUpperCase() + choice.slice(1)} beats ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`);
        return "-1";
    }
}

/*This function runs a game of how many rounds depending on the user's input of
number of rounds, and shows the final result of the game*/
/*
function game(round) {
    let playerScore = 0;
    let computerScore = 0;

   
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
*/

function checkResult(result) {
    if (result === "1") {
        playerScore += 1;
    }
    else if (result === "-1") {
        computerScore += 1;
    }
}

function checkScore(playerScore, computerScore, round) {
    if (playerScore === round) {
        console.log(`You win against Computer in a ${round}-round game :D`);
    }
    else if (computerScore === round){
        console.log(`You lose against Computer in a ${round}-round game :(`);
    }
}




const btnRock = document.querySelector("#Rock");
const btnPaper = document.querySelector("#Paper");
const btnScissors = document.querySelector("#Scissors");
const inputText = document.getElementById("form");

let playerChoice = "";
let playerScore = 0;
let computerScore = 0;
let round = "";

inputText.addEventListener("submit", function(e) {
    e.preventDefault();
    round = +e.target[0].value;
});


btnRock.addEventListener("click", () => {
    playerChoice = "Rock";
    const computerChoice = getComputerChoice(1, 3);
    console.log(computerChoice);

    const result = playRound(playerChoice, computerChoice);
    checkResult(result);

    console.log(playerScore, computerScore);
    checkScore(playerScore, computerScore, round);
    
});

btnPaper.addEventListener("click", () => {
    playerChoice = "Paper";
    const computerChoice = getComputerChoice(1, 3);
    console.log(computerChoice);

    const result = playRound(playerChoice, computerChoice);
    checkResult(result);

    console.log(playerScore, computerScore);

    checkScore(playerScore, computerScore, round);
});

btnScissors.addEventListener("click", () => {
    playerChoice = "Scissors";
    const computerChoice = getComputerChoice(1, 3);
    console.log(computerChoice);

    const result = playRound(playerChoice, computerChoice);
    checkResult(result);

    console.log(playerScore, computerScore);
    checkScore(playerScore, computerScore, round);
});






/*
if (playerScore > computerScore) {
    console.log(`You win against Computer in a ${round}-round game :D`);
}
else if (playerScore < computerScore) {
    console.log(`You lose against Computer in a ${round}-round game :(`);
}
else if (playerScore === computerScore) {
    console.log("Tis but a draw :|");
}
*/


/*
btnPaper.addEventListener("click", () => {
    playerChoice = "Paper";
    playRound(playerChoice, computerChoice);
});

btnScissors.addEventListener("click", () => {
    playerChoice = "Scissors";
    playRound(playerChoice, computerChoice);
});

*/


/*
click a button, rock, paper, or scissors
the event is click
the playerchoice is the button #id
the playerchoice is the input to playround()
*/


//const round = +prompt("How many rounds of Rock-Paper-Scissors?");
//game(5);