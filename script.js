function getComputerChoice() {
  let moves = ["Rock", "Paper", "Scissors"];
  return moves[Math.floor(Math.random() * moves.length)];
}
function playRound(playerSelection, computerSelection) {
  if (playerSelection == "Rock") {
    if (computerSelection == "Rock") {
      return "Draw.";
    } else if (computerSelection == "Paper") {
      return "You lose! Paper beats rock.";
    } else if (computerSelection == "Scissors") {
      return "You win! Rock beats scissors.";
    } else return "error";
  }
  if (playerSelection == "Paper") {
    if (computerSelection == "Rock") {
      return "You win! Paper beats Rock.";
    } else if (computerSelection == "Paper") {
      return "Draw.";
    } else if (computerSelection == "Scissors") {
      return "You lose! Scissors beats paper.";
    } else return "error";
  }
  if (playerSelection == "Scissors") {
    if (computerSelection == "Rock") {
      return "You lose! Rock beats scissors";
    } else if (computerSelection == "Paper") {
      return "You win! Scissors beats paper.";
    } else if (computerSelection == "Scissors") {
      return "Draw.";
    } else return "error";
  }
}
// playerSelection.localeCompare(moves)
