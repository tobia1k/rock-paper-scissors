let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice() {
    let choice = prompt("Rock, paper, scissors. Shoot!");
    // Make sure choice is not falsy first, performing .toLowerCase in declaration throws
    // TypeError if choice is null (I.E. clicking cancel).
    if (choice) {
        choice.toLowerCase();
    }
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice;
    }
    else {
        console.log("Invalid input, try again.");
        return getHumanChoice();
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "scissors"
        || humanChoice === "paper" && computerChoice === "rock"
        || humanChoice === "scissors" && computerChoice === "paper")
    {
        ++humanScore;
        console.log(`You win! ${capitalizeFirstLetter(humanChoice)} beats ${capitalizeFirstLetter(computerChoice)}.`);
    }
    else if (computerChoice === "rock" && humanChoice === "scissors"
        || computerChoice === "paper" && humanChoice === "rock"
        || computerChoice === "scissors" && humanChoice === "paper")
    {
        ++computerScore;
        console.log(`You lose! ${capitalizeFirstLetter(computerChoice)} beats ${capitalizeFirstLetter(humanChoice)}.`)
    }
    else if (humanChoice === computerChoice) {
        console.log(`It's a tie! You both picked ${capitalizeFirstLetter(humanChoice)}.`);
    }
    else {
        console.log("huh?");
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}



function playGame(){
    humanScore = 0;
    computerScore = 0;
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    for (let i = 0; i < 4; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    console.log(`Your Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("You win this game!");
    }
    else if (humanScore < computerScore) {
        console.log("You lose this game.");
    }
    else {
        console.log("You tied this game.");
    }
}
playGame();