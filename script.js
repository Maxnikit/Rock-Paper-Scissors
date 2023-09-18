let playerWonRound = 0;
let computerWonRound = 0;
function getComputerChoice() {
  let moves = ["Rock", "Paper", "Scissors"];
  return moves[Math.floor(Math.random() * moves.length)];
}
function playRound(playerSelection, computerSelection) {
  if (playerSelection === "Rock") {
    if (computerSelection === "Rock") {
      return "Draw.";
    } else if (computerSelection === "Paper") {
      computerWonRound += 1;
      return "Round lost! Paper beats rock.";
    } else if (computerSelection === "Scissors") {
      playerWonRound += 1;
      return "Round won! Rock beats scissors.";
    } else return "error";
  }
  if (playerSelection === "Paper") {
    if (computerSelection === "Rock") {
      playerWonRound += 1;
      return "Round won! Paper beats Rock.";
    } else if (computerSelection === "Paper") {
      return "Draw.";
    } else if (computerSelection === "Scissors") {
      computerWonRound += 1;
      return "Round lost! Scissors beats paper.";
    } else return "error";
  }
  if (playerSelection === "Scissors") {
    if (computerSelection === "Rock") {
      computerWonRound += 1;
      return "Round lost! Rock beats scissors";
    } else if (computerSelection === "Paper") {
      playerWonRound += 1;
      return "Round won! Scissors beats paper.";
    } else if (computerSelection === "Scissors") {
      return "Draw.";
    } else return "error";
  } else
    return "Error. You have to select either Rock, paper or scissors for this game to work properly.";
}
const container = document.getElementById("container");
const buttons = Array.from(document.getElementsByClassName("moveButton"));
const matchResult = document.createElement("div");
const restartButton = document.createElement("button");
restartButton.textContent = "Restart?";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let playerSelection = "";
    playerSelection = button.textContent;
    const userMove = document.getElementById("userMove");
    userMove.textContent = "Your move: " + `${playerSelection}`;
    let computerSelection = getComputerChoice();
    const computerMove = document.getElementById("computerMove");
    computerMove.textContent = "Enemy move: " + `${computerSelection}`;
    const Result = document.getElementById("Result");
    Result.textContent = `${playRound(playerSelection, computerSelection)}`;

    const Score = document.getElementById("Score");
    Score.textContent =
      "Score:" + `${playerWonRound}` + "vs" + `${computerWonRound}`;

    if (playerWonRound === 5) {
      matchFinish();
      matchResult.textContent = "Congratulations! You won!!!";
    } else if (computerWonRound === 5) {
      matchFinish();
      matchResult.textContent = "You lost. Better luck next time!";
    }
  });
});
function matchFinish() {
  container.appendChild(matchResult);
  container.appendChild(restartButton);
  buttons.forEach((button) => {
    button.style.display = "none";
  });
  restartButton.addEventListener("click", () => {
    console.log("check");
    playerWonRound = 0;
    computerWonRound = 0;
    Score.textContent = "Score:";
    container.removeChild(matchResult);
    container.removeChild(restartButton);
    buttons.forEach((button) => {
      button.style.display = "inline";
    });

    Result.textContent = "Choose your move!";
  });
}
