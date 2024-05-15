function getComputerChoice() {
    let random = Math.random();
    if (random < 0.33) {
        return "rock";
    }
    else if (random < 0.67) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Rock, paper, or scissors?").toLowerCase();
    while (choice != "rock" && choice != "paper" && choice != "scissors") {
        choice = prompt("Invalid choice. Rock, paper, or scissors?").toLowerCase();
    }
    return choice;
}



function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice == "rock") {
            if (computerChoice == "paper") {
                console.log("You lose! Paper beats rock.");
                computerScore++;
            }
            else if (computerChoice == "scissors") {
                console.log("You win! Rock beats scissors.");
                humanScore++;
            }
            else {
                console.log("Tie!");
            }
        }
        else if (humanChoice == "paper") {
            if (computerChoice == "rock") {
                console.log("You win! Paper beats rock.");
                humanScore++;
            }
            else if (computerChoice == "scissors") {
                console.log("You lose! Scissors beats paper.");
                computerScore++;
            }
            else {
                console.log("Tie!");
            }
        }
        else if (humanChoice == "scissors") {
            if (computerChoice == "rock") {
                console.log("You lose! Rock beats scissors.");
                computerScore++;
            }
            else if (computerChoice == "paper") {
                console.log("You win! Scissors beats paper.");
                humanScore++;
            }
            else {
                console.log("Tie!");
            }
        }
        else {
            console.log("Invalid choice.");
        }
    }

    for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }
    console.log(`Final score: human ${humanScore}, computer ${computerScore}`);
}

playGame();