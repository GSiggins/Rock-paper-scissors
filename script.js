
var gameTotals = {
    wins: 0,
    losses: 0,
    ties: 0
}

playGame()

function playGame() {

    let playerChoice = prompt("Get ready to play Rock, Paper, Scissors! Choose R, P, S")

    var choices = ["R", "P", "S"];

    computerChoice = choices[Math.floor(Math.random() * choices.length)]
    console.log("The computer chose " + computerChoice);



    if (playerChoice === "P") {
        console.log("The player chose P")
        playerPaper()
        function playerPaper() {
            if (playerChoice === "P" && computerChoice === "P") {
                console.log("The player and computer tied");
                alert("You tied!");
                gameTotals.ties += 1
            } else if (playerChoice === "P" && computerChoice === "R") {
                console.log("The player beat the computer");
                alert("You win!");
                gameTotals.wins += 1
            } else {
                console.log("The computer beat the player");
                alert("You Lost!")
                gameTotals.losses += 1
                return;
            }
        }

    }
    else if (playerChoice === "R") {
        console.log("The player chose R")
        playerRock()
        function playerRock() {
            if (playerChoice === "R" && computerChoice === "R") {
                console.log("The player and computer tied");
                alert("You tied!");
                gameTotals.ties += 1
            } else if (playerChoice === "R" && computerChoice === "S") {
                console.log("The player beat the computer");
                alert("You win!");
                gameTotals.wins += 1
            } else {
                console.log("The computer beat the player");
                alert("You Lost!")
                gameTotals.losses += 1
                return;
            }
        }
    }
    else if (playerChoice === "S") {
        console.log("The player chose S")
        playerScissors()
        function playerScissors() {
            if (playerChoice === "S" && computerChoice === "S") {
                console.log("The player and computer tied");
                alert("You tied!");
                gameTotals.ties += 1
            } else if (playerChoice === "S" && computerChoice === "P") {
                console.log("The player beat the computer");
                alert("You win!");
                gameTotals.wins += 1
            } else {
                console.log("The computer beat the player");
                alert("You Lost!")
                gameTotals.losses += 1
                return;
            }
        }
    }

    else {
        alert("Please choose R, P, or S!")
    }


    alert("Wins: " + gameTotals.wins + "\n" + "Losses: " + gameTotals.losses + "\n" + "Ties: " + gameTotals.ties)

    var playAgain = confirm("Do you want to play again?")

    if (playAgain === true) {
        playGame()
}

}