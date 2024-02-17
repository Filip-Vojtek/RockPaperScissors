function getComputerChoice() {
    const computerChoices = ["rock", "paper", "scissors"];
    let getRandomNumber = Math.floor(Math.random() * 3);
        return (computerChoices[getRandomNumber]);
}

function getUserChoice() {
    let userChoice = prompt("Rock or Paper or Scissors: ").toLowerCase();
    return userChoice;
}

function Logic() {
    // co dát místo result ten counter na score a v každý možnosti dát prostě console.log s výsledkem
    let result = "";

    if (computerChoice == "rock" && userChoice == "rock") {
        result = "draw";
    }
    else if (computerChoice == "paper" && userChoice == "paper") {
        result = "draw";
    }
    else if (computerChoice == "scissors" && userChoice == "scissors") {
        result = "draw";
    }

    else if (computerChoice == "rock" && userChoice == "paper") {
        result = "You win !"
    }
    else if (computerChoice == "rock" && userChoice == "scissors") {
        result = "You loose..."
    }
    else if (computerChoice == "paper" && userChoice == "rock") {
        result = "You loose..."
    }
    else if (computerChoice == "paper" && userChoice == "scissors") {
        result = "You win !"
    }
    else if (computerChoice == "scissors" && userChoice == "rock") {
        result = "You win !"
    }
    else if (computerChoice == "scissors" && userChoice == "paper") {
        result = "You loose..."
    }

    return result;
}

function playGame() {
    console.log("the game starts...");
    console.log(`computer draws ${computerChoice}`);
    console.log(`you draw ${userChoice}`);

    console.log(Logic());

}

const computerChoice = (getComputerChoice());
const userChoice = getUserChoice();

playGame();



// console.log(userChoice);
// console.log(computerChoice);
