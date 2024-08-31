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
    if (choice == "rock" || choice == "paper" || choice == "scissors") {
        return choice;
    }
    else {
        return "Invalid Input";
    }
}