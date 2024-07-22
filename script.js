function getComputerChoice() {
  const choice = ["rock", "paper", "scissors"];

  let randomNumber = Math.floor(Math.random() * 3);
  let computerChoice = choice[randomNumber];
  return computerChoice;
}

function getHumanChoice() {
  let humanChoice;
  while (true) {
    humanChoice = prompt(
      "Enter your choice (rock, paper, scissors): ",
      ""
    ).toLowerCase();

    if (
      humanChoice === "rock" ||
      humanChoice === "paper" ||
      humanChoice === "scissors"
    ) {
      break;
    } else {
      console.log("Incorrect choice. Please enter rock, paper or scissors.");
    }
  }

  return humanChoice;
}

function printChoices(human, computer) {
  console.log(`Human: ${human}`);
  console.log(`Computer: ${computer}`);
}

function playGame() {
  let humanScore = 0;
  let ComputerScore = 0;

  // Game logic

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      printChoices(humanChoice, computerChoice);
      console.log("It is a tie!");
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      printChoices(humanChoice, computerChoice);
      console.log("The computer wins this round. ");
      ComputerScore++;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
      printChoices(humanChoice, computerChoice);
      console.log("The computer wins this round. ");
      ComputerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      printChoices(humanChoice, computerChoice);
      console.log("The computer wins this round. ");
      ComputerScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      printChoices(humanChoice, computerChoice);
      console.log("The computer wins this round. ");
      ComputerScore++;
    } else {
      printChoices(humanChoice, computerChoice);
      console.log("You win this round. ");
      humanScore++;
    }
  }

  // 5 rounds everytime the user plays the game

  for (i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  // Winner conditionals

  if (humanScore > ComputerScore) {
    console.log("You win. Congratulations!");
  } else if (humanScore < ComputerScore) {
    console.log("The computer wins the game:(");
  } else {
    console.log("The game is a tie.");
  }
}

playGame();
