function getComputerChoice() {
   let computerChoice = Math.floor(Math.random()*CHOICES.length);
    return CHOICES[computerChoice];
}

function getPlayerChoice() {
    let playerChoice = prompt('Will you choose Rock, Paper, or Scissors?').toUpperCase();
    return playerChoice;
}

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    playerSelection = getPlayerChoice();
    
    if(playerSelection == computerSelection) {
        return 3;
    } else if(playerSelection == 'ROCK' && computerSelection == 'PAPER') {
        return 2;
    } else if(playerSelection == 'ROCK' && computerSelection == 'SCISSORS') {
        return 1;
    } else if(playerSelection == 'PAPER' && computerSelection == 'SCISSORS') {
        return 2;
    } else if(playerSelection == 'PAPER' && computerSelection == 'ROCK') {
        return 1;
    } else if(playerSelection == 'SCISSORS' && computerSelection == 'ROCK') {
        return 2;
    } else if(playerSelection == 'SCISSORS' && computerSelection == 'PAPER') {
        return 1;
    } else {
        return 0;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let result;
    let currentScore = `The score is Player: ${playerScore} Computer: ${computerScore}`;

    for (let i = 0; i < 5; i++) {

        switch(playRound(playerSelection, computerSelection)){
            case 3: //Tie
                result = 'You Tied. ' + currentScore;
                break;
            case 1: //Win
                playerScore++;
                result = `You WIN! ${playerSelection} beats ${computerSelection}\! ` + currentScore;
                break;
            case 2: //Lose
                computerScore++;
                result = `You lose. ${computerSelection} beats ${playerSelection}\. ` + currentScore;
                break;
            case 0: //Error
                i--;
                result = 'Invalid Selection: Try Again';
                break;
        }
        
        console.log(result);
        console.log(i);
    }

    if(playerScore > computerScore) {
        alert('Awesome! You won the game! ' + currentScore);
    } else if(playerScore < computerScore) {
        alert('Too Bad. You lost the game. ' + currentScore);
    } else {
        alert('AMAZING! Yoou managed to tie every round! ');
    }
        
    return 1;
}


const CHOICES = ['ROCK', 'PAPER', 'SCISSORS']

var computerSelection = 0;
var playerSelection = 0;
console.log(game());

//console.log(computerSelection); //verify computerSelection is running correctly
//console.log(playerSelection); //veriffy playSelection is running correctly