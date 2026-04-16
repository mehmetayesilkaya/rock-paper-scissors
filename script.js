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
    display.textContent = `It's a tie! Both chose ${humanChoice}. Score you: ${humanScore} - computer: ${computerScore}`;
  } else if (
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'paper' && computerChoice === 'rock') ||
    (humanChoice === 'scissors' && computerChoice === 'paper')
  ) {
    ++humanScore;
    display.textContent = `You win! ${humanChoice} beats ${computerChoice} and score you: ${humanScore} - computer: ${computerScore}`;
  } else {
    ++computerScore;
    display.textContent = `You lost! ${computerChoice} beats ${humanChoice} and score you: ${humanScore} - computer: ${computerScore}`;
  }

  if (humanScore === 5) {
    display.textContent = `Game Over: You are the winner! 😎 and score you: ${humanScore} - computer: ${computerScore}`;
    humanScore = 0;
    computerScore = 0;
  } else if (computerScore === 5) {
    display.textContent = `Game Over: Computer wins the game! 🤖 and score you: ${humanScore} - computer: ${computerScore}`;
    humanScore = 0;
    computerScore = 0;
  }
}

const rockBtn = document.querySelector('.rockBtn');
const paperBtn = document.querySelector('.paperBtn');
const scissorsBtn = document.querySelector('.scissorsBtn');
const display = document.querySelector('#display');

rockBtn.addEventListener('click', () => {
  playRound('rock', getComputerChoice());
});

paperBtn.addEventListener('click', () => {
  playRound('paper', getComputerChoice());
});

scissorsBtn.addEventListener('click', () => {
  playRound('scissors', getComputerChoice());
});
