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

//console.log(getComputerChoice());
console.log(getHumanChoice());
