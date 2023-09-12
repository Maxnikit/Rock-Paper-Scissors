let playerWonRound = 0;
let computerWonRound = 0;
function getComputerChoice() {
  let moves = ["Rock", "Paper", "Scissors"];
  return moves[Math.floor(Math.random() * moves.length)];
}
function playRound(playerSelection, computerSelection) {
  playerSelection =
    playerSelection[0].toUpperCase() + playerSelection.toLowerCase().slice(1);
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
function game() {
  for (let i = 0; i < 100; i++) {
    let playerSelection = prompt(
      "Rock, paper or scissors? Choose wisely!",
      "Rock"
    );
    console.log(`Player chose ${playerSelection}.`);
    let computerSelection = getComputerChoice();
    console.log(`Computer chose ${computerSelection}.`);
    alert(playRound(playerSelection, computerSelection));

    console.log(playerWonRound);
    console.log(computerWonRound);
    if (playerWonRound === 5) {
      alert("Congratulations! You won!!!");
      break;
    } else if (computerWonRound === 5) {
      alert("You lost. Better luck next time!");
      break;
    }
  }
}
