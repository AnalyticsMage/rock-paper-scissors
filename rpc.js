options = ["rock","paper","scissors"];
humanScore = 0;
computerScore = 0;

function getComputerChoice() {
    return options[Math.floor(Math.random()* options.length)];
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, paper or scissors?").toLowerCase();

    while(!options.includes(humanChoice)) {
        humanChoice = prompt("Invlid input. Please enter rock, paper or scissors.").toLowerCase();
    }
    return humanChoice
}


function playRound(humanSelection, computerSelection) {
    if (humanSelection === computerSelection) {
        console.log(`Even! You both chose ${humanSelection}`);
    } else if (humanSelection == 'rock') {
        if (computerSelection == 'paper') {
            computerScore++;
            console.log("You lose! Computer chose paper.");
        } else if (computerSelection == 'scissors') {
            humanScore++;
            console.log("You won! Computer chose scissors.");
        }
    } else if (humanSelection == 'paper') {
        if (computerSelection == 'scissors') {
            computerScore++;
            console.log("You lose! Computer chose scissors.");
        } else if (computerSelection == 'rock') {
            humanScore++;
            console.log("You won! Computer chose rock.");
        }
    } else if (humanSelection == 'scissors') {
        if (computerSelection == 'rock') {
            computerScore++;
            console.log("You lose! Computer chose rock.");
        } else if (computerSelection == 'paper') {
            humanScore++;
            console.log("You won! Computer chose paper.");
        }
    }
}

function theGame(rounds = 5) {
    for (let i = 1; i<=rounds; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection)
    }
    if (computerScore > humanScore) {
        console.log(`Computer Won! Computer: ${computerScore} - You: ${humanScore}`)
    } else if (computerScore < humanScore) {
        console.log(`You won! You: ${humanScore} - Computer: ${computerScore}`)
    } else {
        console.log("It's a tie!")
    }
}

theGame();
