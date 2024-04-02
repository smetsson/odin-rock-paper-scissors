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
        return "rock";
    } else if ( i >= 0.333 && i <= 0.666) {
        return "paper";
    } else {
    return "scissors";
    }
}

function getComputerChoice2() {
    let i = Math.random()
    console.log(i);
    return (i < 0.333) ? "rock" 
    : (i >= 0.333 && i <= 0.666) ? "paper"
    : "scissors";
}

// Get player choice (rock, paper, scissors -> case-insensitive) and save in playerChoice
// Evaluate playerChoice versus computerChoice
    // Same choice means tie
    // Rock beats scissors
    // Scissors beat paper
    // Paper beats rock
    // Show win or lose message
// Create a gaming session that loops the Rock Paper Scissors game 5 times
    // Keep score every loop
    // Show score every loop
    // Show winner or loser at the end of the 5th loop