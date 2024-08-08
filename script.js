// Random choice
function getComputerChoice() {
  const choice = ["rock", "paper", "scissors"];

  let randomNumber = Math.floor(Math.random() * 3);
  let computerChoice = choice[randomNumber];
  return computerChoice;
}

// Shows what each side chose for each round

const choicesDiv = document.createElement("div");
choicesDiv.className = "choices-div";
document.body.appendChild(choicesDiv);
const humanChoiceDiv = document.createElement("div");
humanChoiceDiv.className = "h-choices";
const computerChoiceDiv = document.createElement("div");
computerChoiceDiv.className = "c-choices";

function printChoices(human, computer) {
  humanChoiceDiv.textContent = `You chose: ${human}`;
  choicesDiv.appendChild(humanChoiceDiv);

  computerChoiceDiv.textContent = `The computer chose: ${computer}`;
  choicesDiv.appendChild(computerChoiceDiv);
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let roundsPlayed = 0;
  let gameFinished = false;
  let winner;

  // Create score divs and update scores
  const humanScoreDiv = document.createElement("div");
  humanScoreDiv.className = "human-score";
  humanScoreDiv.textContent = "Human: 0";
  document.body.insertBefore(
    humanScoreDiv,
    document.querySelector(".human-choices")
  );

  const computerScoreDiv = document.createElement("div");
  computerScoreDiv.className = "comp-score";
  computerScoreDiv.textContent = "Computer: 0";
  document.body.insertBefore(
    computerScoreDiv,
    document.querySelector(".comp-choices")
  );

  function updateScores() {
    humanScoreDiv.textContent = `Human: ${humanScore}`;
    computerScoreDiv.textContent = `Computer: ${computerScore}`;
  }

  // Game logic - show final scores too at the end and reset when an option is picked

  function playRound(humanChoice, computerChoice) {
    printChoices(humanChoice, computerChoice);

    if (humanChoice !== computerChoice) {
      if (
        (humanChoice === "rock" && computerChoice === "paper") ||
        (humanChoice === "scissors" && computerChoice === "rock") ||
        (humanChoice === "paper" && computerChoice === "scissors")
      ) {
        computerScore++;
      } else {
        humanScore++;
      }
    }

    roundsPlayed++;

    if (roundsPlayed === 3) {
      getWinner();
      gameFinished = true;
    }

    updateScores();
  }

  // Winner conditionals

  function getWinner() {
    winner = document.createElement("div");
    winner.className = "winner-div";

    document.body.appendChild(winner);
    restartGameMessage = "Pick an option to restart the game :)";

    if (humanScore > computerScore) {
      winner.textContent =
        "You win the game. Congratulations! " + restartGameMessage;
    } else if (humanScore < computerScore) {
      winner.textContent = "The computer wins the game:( " + restartGameMessage;
    } else {
      winner.textContent = "The game is a tie. " + restartGameMessage;
    }

    humanScore = 0;
    computerScore = 0;
    roundsPlayed = 0;
  }

  // user presses one of the option buttons to play the game

  const icons = document.querySelectorAll(".human-choices div");

  icons.forEach((icon) => {
    icon.addEventListener("click", (e) => {
      if (gameFinished) {
        winner.remove();
        humanScore = 0;
        computerScore = 0;
        roundsPlayed = 0;
        gameFinished === false;
      }

      playRound(e.currentTarget.id, getComputerChoice());
    });
  });
}

playGame();
