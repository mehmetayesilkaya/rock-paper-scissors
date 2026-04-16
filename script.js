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
  let humanScore = 0;
  let computerScore = 0;
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
  // for (let i = 0; i < 5; i++) {
  //   console.log(`--- Round ${i + 1} ---`);
  //   const humanSelection = getHumanChoice();
  //   const computerSelection = getComputerChoice();
  //   playRound(humanSelection, computerSelection);
  //   console.log(
  //     `Current Score - Human: ${humanScore}, Computer: ${computerScore}`
  //   );
  // }
  if (humanScore > computerScore) {
    console.log('Game Over: You are the winner! 😎');
  } else if (humanScore < computerScore) {
    console.log('Game Over: Computer wins the game! 🤖');
  } else {
    console.log('Game Over: The game ended in a tie! 🤨');
  }
}

const rockBtn = document.querySelector('.rockBtn');
const paperBtn = document.querySelector('.paperBtn');
const scissorsBtn = document.querySelector('.scissorsBtn');
const div = document.querySelector('#div');

rockBtn.addEventListener('click', () => {
  playRound('rock', getComputerChoice());
});

paperBtn.addEventListener('click', () => {
  playRound('paper', getComputerChoice());
});

scissorsBtn.addEventListener('click', () => {
  playRound('scissors', getComputerChoice());
});

playRound();
