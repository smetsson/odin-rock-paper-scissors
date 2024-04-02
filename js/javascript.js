console.log("Hello World!")

// Create variable for computerSelection
let computerSelection

// Create variable for playerSelection
let playerSelection

// Generate computer choice (rock, paper, scissors) and save in computerSelection
function getComputerChoice() {
    let i = Math.random()
    console.log(i);
    if (i < 0.333) {
        return "Rock";
    } else if ( i >= 0.333 && i <= 0.666) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getComputerChoice2() {
    let i = Math.random()
    console.log(i);
    return (i < 0.333) ? "Rock" 
    : (i >= 0.333 && i <= 0.666) ? "Paper"
    : "Scissors";
}

// Get player choice (rock, paper, scissors -> case-insensitive) and save in playerChoice
function getPlayerChoice() {
    let playerSelection = prompt("Rock, Paper or Scissors?", "Rock");
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
    if (playerSelection === "Rock" || playerSelection === "Paper" || playerSelection === "Scissors") {
        return playerSelection;
    } else {
        alert("Incorrect input");
    }
}

let getPlayerChoice2 = () => {
    let playerSelection = prompt("Rock, Paper or Scissors?", "Rock");
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
    return (playerSelection === "Rock" || playerSelection === "Paper" || playerSelection === "Scissors") 
    ? playerSelection 
    : alert("Incorrect input");
}

// Evaluate playerChoice versus computerChoice
    // Same choice means tie
    // Rock beats scissors
    // Scissors beat paper
    // Paper beats rock
    // Show win or lose message

function playRound(playerSelection, computerSelection) {
    switch (true) {
        case (playerSelection === "Rock" && computerSelection === "Scissors"):
        case (playerSelection === "Scissors" && computerSelection === "Paper"):
        case (playerSelection === "Paper" && computerSelection === "Rock"):
            return `You Win! ${playerSelection} beats ${computerSelection}`;
            break;
        
        case (playerSelection === "Scissors" && computerSelection === "Rock"):
        case (playerSelection === "Paper" && computerSelection === "Scissors"):
        case (playerSelection === "Rock" && computerSelection === "Paper"):
            return `You Lose! ${computerSelection} beats ${playerSelection}`;
            break;
            
        default:
            return `A Tie! ${playerSelection} equals ${computerSelection}`; 
    }    
}

// Create a gaming session that loops the Rock Paper Scissors game 5 times
    // Keep score every loop
    // Show score every loop
    // Show winner or loser at the end of the 5th loop

function playGame() {
    for (let i = 0; i < 5; i++) {
        let roundOutcome = playRound(getPlayerChoice(), getComputerChoice());
        console.log(roundOutcome)
        // console.log(round);
    }
}