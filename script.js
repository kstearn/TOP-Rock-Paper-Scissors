
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
    let results = document.querySelector("#results");
    let scores = document.querySelector("#scores");

    function playRound(humanChoice, computerChoice) {
        if (humanChoice == "rock") {
            if (computerChoice == "paper") {
                results.textContent = "You lose! Paper beats rock.";
                computerScore++;
            }
            else if (computerChoice == "scissors") {
                results.textContent = "You win! Rock beats scissors.";
                humanScore++;
            }
            else {
                results.textContent = "Tie!";
            }
        }
        else if (humanChoice == "paper") {
            if (computerChoice == "rock") {
                results.textContent = "You win! Paper beats rock.";
                humanScore++;
            }
            else if (computerChoice == "scissors") {
                results.textContent = "You lose! Scissors beats paper.";
                computerScore++;
            }
            else {
                results.textContent = "Tie!";
            }
        }
        else if (humanChoice == "scissors") {
            if (computerChoice == "rock") {
                results.textContent = "You lose! Rock beats scissors.";
                computerScore++;
            }
            else if (computerChoice == "paper") {
                results.textContent = "You win! Scissors beats paper.";
                humanScore++;
            }
            else {
                results.textContent = "Tie!";
            }
        }
        else {
            results.textContent = "Invalid choice.";
        }

        // display scores
        scores.textContent = `Human score: ${humanScore} Computer score: ${computerScore}`;
    }

    let btns = document.querySelectorAll("button");

    btns.forEach((button) => {
        button.addEventListener("click", (e) => {
            let humanSelection = e.target.textContent.toLowerCase();
            let computerSelection = getComputerChoice();

            playRound(humanSelection, computerSelection)
        })
    })
}

playGame();

