let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const value = Math.floor(Math.random() * 3);
  if (value === 0) {
    return 'rock';
  } else if (value === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

function getHumanChoice() {
  const choice = prompt(
    'What is your choice: Rock, Paper or Scissors...'
  ).toLowerCase();
  return choice;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log(`It's a tie! Both chose ${humanChoice}`);
  } else if (
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'paper' && computerChoice === 'rock') ||
    (humanChoice === 'scissors' && computerChoice === 'paper')
  ) {
    ++humanScore;
    console.log(`You win! ${humanChoice} beats ${computerChoice} `);
  } else {
    ++computerScore;
    console.log(`You lost! ${computerChoice} beats ${humanChoice}`);
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));

//console.log(getComputerChoice());
//console.log(getHumanChoice());
