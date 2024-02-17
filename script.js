function getComputerChoice() {
    const computerChoices = ["rock", "paper", "scissors"];
    let getRandomNumber = Math.floor(Math.random() * 3);
        return (computerChoices[getRandomNumber]);
}

function getUserChoice() {
    let userChoice = prompt("Rock or Paper or Scissors: ").toLowerCase();
    return userChoice;
}

function gameLogic() {
    if (computerChoice == "rock" && userChoice == "rock") {
        return "draw";
    }
    else if (computerChoice == "paper" && userChoice == "paper") {
        return "draw";
    }
    else if (computerChoice == "scissors" && userChoice == "scissors") {
        return "draw";
    }

    else if (computerChoice == "rock" && userChoice == "paper") {
        return "You win !"
    }
    else if (computerChoice == "rock" && userChoice == "scissors") {
        return "You loose..."
    }
    else if (computerChoice == "paper" && userChoice == "rock") {
        return "You loose..."
    }
    else if (computerChoice == "paper" && userChoice == "scissors") {
        return "You win !"
    }
    else if (computerChoice == "scissors" && userChoice == "rock") {
        return "You win !"
    }
    else if (computerChoice == "scissors" && userChoice == "paper") {
        return "You loose..."
    }

}

function playGame() {
    console.log("the game starts...");
    console.log(`computer draws  ${computerChoice}`);
    console.log(`user draws ${userChoice}`);

    console.log(gameLogic);

}

const computerChoice = (getComputerChoice());
const userChoice = getUserChoice();
const gameLogic = (gameLogic());



// console.log(userChoice);
// console.log(computerChoice);
