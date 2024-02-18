/*
1) - getComputerChoice function, return random computer selection from array
2) - getUserChoice the same function, which returns user choice from prompt
3) - function playRound, which plays one round of rock paper scissors
4) - function playGame, which starts the game

*/


function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let getRandomNumber = Math.floor(Math.random() * 3);
    let chooseComputer = choices[getRandomNumber];
    // let chooseComputer = "paper";
    return chooseComputer;
}

function getUserChoice() {
    let userChoice = prompt("rock paper or scissors ?: ").toLowerCase();
    if (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors") {
        alert("try again...")
        getUserChoice();
    }
    else {
        return userChoice;

    }
}

function playRound(computerChoice, userChoice) {
    let didUserWin;

    if (computerChoice == "rock" && userChoice == "scissors") {
        console.log(`You loose... ${computerChoice} beats ${userChoice}`)
        didUserWin = false;
    }
    else if (computerChoice == "paper" && userChoice == "rock") {
        console.log(`You loose... ${computerChoice} beats ${userChoice}`)
        didUserWin = false;
    }
    else if (computerChoice == "scissors" && userChoice == "paper") {
        console.log(`You loose... ${computerChoice} beats ${userChoice}`)
        didUserWin = false;
    }
    else if (computerChoice == userChoice) {
        console.log(`It's a draw ${computerChoice} and ${userChoice}`)
    }
    else {
        console.log(`You Win ! ${userChoice} beats ${computerChoice}`)
        didUserWin = true;
    }

    return didUserWin;

} 

let roundToEnd = 0;
let userScore = 0;
let computerScore = 0;

function playGame() {
    const playRoundOne = playRound(getComputerChoice(), getUserChoice());

    if (playRoundOne == true) {
        userScore += 1;
        roundToEnd += 1;
    }
    else if (playRoundOne == false) {
        computerScore += 1;
        roundToEnd += 1;
    }
    else {
        roundToEnd += 1;
    }

    console.log(`User score: ${userScore}`)
    console.log(`Computer score: ${computerScore}`)
}


let gameOver = false;


while (!gameOver) {
    playGame();
    console.log("ROUND TO END : " + roundToEnd)
    if (roundToEnd == 5) {
        gameOver = true;
    }
}

if (userScore > computerScore) {
    alert(`User wins ! with ${userScore} points!`)
}
else {
    alert(`Computer wins ! with ${computerScore} points!`)

}








































// function getComputerChoice() {
//     const computerChoices = ["rock", "paper", "scissors"];
//     let getRandomNumber = Math.floor(Math.random() * 3);
//         return (computerChoices[getRandomNumber]);
// }

// function getUserChoice() {
//     let userChoice = prompt("Rock or Paper or Scissors: ").toLowerCase();
//     return userChoice;
// }


// function Logic(computerChoice, userChoice) {
//     let counter = 3;

//     if (computerChoice == "rock" && userChoice == "rock") {
//         console.log("draw")
//     }
//     else if (computerChoice == "paper" && userChoice == "paper") {
//         console.log("draw") 
//     }
//     else if (computerChoice == "scissors" && userChoice == "scissors") {
//         console.log("draw")
//     }

//     else if (computerChoice == "rock" && userChoice == "paper") {
//         console.log("You win !")
//     }
//     else if (computerChoice == "rock" && userChoice == "scissors") {
//         console.log("You loose...")
//         counter -= 1;
//     }
//     else if (computerChoice == "paper" && userChoice == "rock") {
//         console.log("You loose...")
//         counter -= 1;
//     }
//     else if (computerChoice == "paper" && userChoice == "scissors") {
//         console.log("You win !")

//     }
//     else if (computerChoice == "scissors" && userChoice == "rock") {
//         console.log("You win !")

//     }
//     else if (computerChoice == "scissors" && userChoice == "paper") {
//         console.log("You loose...")
//         counter -= 1;
//     }
//     return counter;
// }



// function playGame() {

//     const computerChoice = getComputerChoice();
//     const userChoice = getUserChoice();
//     const counter = Logic(computerChoice, userChoice);

//     console.log(`COMPUTER - ${computerChoice}`);
//     console.log(`USER - ${userChoice}`);
//     console.log(`SCORE: ${counter}`);

//     return counter;

// }

// playGame();

