let playerScore = 0;
let computerScore = 0;
let gamesPlayed = 0;

computerPlay = () => {
  let randomMove = Math.floor(Math.random()*3);
  switch (randomMove) {
    case 0:
    return 'rock';
    case 1: 
    return 'paper';
    case 2:
    return 'scissors';
  }
}

 //rework to end if input != valid

function game() {

let computerSelection = computerPlay();
let playerSelection = prompt('What\'s your move?').toLowerCase(); 

console.log('Game 1')

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `It\'s a tie! Your score: ${playerScore}, computer score: ${computerScore}`;
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    computerScore += 1;
    return `You lose! Paper beats rock. Your score: ${playerScore}, computer score: ${computerScore}`;
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    computerScore += 1;
    return `You lose! Scissors beats paper. Your score: ${playerScore}, computer score: ${computerScore}`;
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    computerScore += 1;
    return `You lose! Rock beats scissors. Your score: ${playerScore}, computer score: ${computerScore}`;
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    playerScore += 1;
    return `You win! Rock beats scissors. Your score: ${playerScore}, computer score: ${computerScore}`;
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    playerScore += 1;
    return `You win! Paper beats rock. Your score: ${playerScore}, computer score: ${computerScore}`;
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    playerScore += 1;
    return `You win! Scissors beats paper. Your score: ${playerScore}, computer score: ${computerScore}`;
  } else {
    return 'Error!';
  }
}

console.log(`You threw ${playerSelection}, the computer threw ${computerSelection}.`);
playRound();

console.log(playRound(playerSelection, computerSelection));

for (let i = 2; i <= 5; i++) {
  computerSelection = computerPlay();
  playerSelection = prompt('What\'s your move?').toLowerCase();
  console.log('Game ' + (gamesPlayed + i));
  console.log(`You threw ${playerSelection}, the computer threw ${computerSelection}.`);
  playRound();
  console.log(playRound(playerSelection, computerSelection));

  if (playerScore === 3) {
    console.log('You won 3 of 5!');
    break;
  } else if (computerScore === 3) {
    console.log('The computer won 3 of 5!');
    break;
  }
} 

}