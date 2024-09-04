let humanScore = 0;
let computerScore = 0;
const log = document.querySelector('#results');
const humanScoreDisplay = document.querySelector('#humanScore');
const computerScoreDisplay = document.querySelector('#computerScore');
const btns = document.getElementsByClassName('button');
humanScoreDisplay.innerText = `Your Score: ${humanScore}`;
computerScoreDisplay.innerText = `Computer Score: ${computerScore}`;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    switch(choice) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2: 
            return "scissors";
            break;
        default:
            return "huh?";
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "scissors"
        || humanChoice === "paper" && computerChoice === "rock"
        || humanChoice === "scissors" && computerChoice === "paper")
    {
        ++humanScore;
        updateScoreDisplay();
        log.innerText = `You win this round! ${capitalizeFirstLetter(humanChoice)} beats ${capitalizeFirstLetter(computerChoice)}.`;
        if (humanScore === 5) {
            displayWinner('You win');
        }
    }
    else if (computerChoice === "rock" && humanChoice === "scissors"
        || computerChoice === "paper" && humanChoice === "rock"
        || computerChoice === "scissors" && humanChoice === "paper")
    {
        ++computerScore;
        updateScoreDisplay();
        log.innerText = `You lose this round! ${capitalizeFirstLetter(computerChoice)} beats ${capitalizeFirstLetter(humanChoice)}.`;
        if (computerScore === 5) {
            displayWinner('The computer wins');
        }
    }
    else if (humanChoice === computerChoice) {
        log.innerText = `It's a tie! You both picked ${capitalizeFirstLetter(humanChoice)}.`;
    }
    else {
        log.innerText = "huh?";
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function displayWinner(winner) {
    for (let i = 0; i < btns.length; i++) {
        btns[i].disabled = true;
    }
    log.innerText = `Game over! ${winner}!`;
    const playAgainBtn = document.createElement('button');
    playAgainBtn.innerText = "Play Again";
    document.body.appendChild(playAgainBtn);
    playAgainBtn.addEventListener('click', (e) => {
        resetGame();
        playAgainBtn.remove();
    });
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    updateScoreDisplay();
    log.innerText = '';
    for (let i = 0; i < btns.length; i++) {
        btns[i].disabled = false;
    }
}

function updateScoreDisplay() {
        humanScoreDisplay.innerText = `Your Score: ${humanScore}`;
        computerScoreDisplay.innerText = `Computer Score: ${computerScore}`;
}

let btn = document.querySelector(".btn");

btn.addEventListener('click', (e) => {
    let target = e.target;

    switch (target.id) {
        case 'btnRock':
            playRound('rock', getComputerChoice());
            break;
        case 'btnPaper':
            playRound('paper', getComputerChoice());
            break;
        case 'btnScissors':
            playRound('scissors', getComputerChoice());
            break;
    }
});