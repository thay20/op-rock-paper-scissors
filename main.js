function getComputerChoice() {
   let computerChoice = Math.floor(Math.random()*CHOICES.length);
    return CHOICES[computerChoice];
}

function getPlayerChoice() {
    let playerChoice = prompt('Will you choose RemotePlayback, Paper, or Scissors?').toUpperCase();
    return playerChoice;
}

function playRound(playerSelection, computerSelection) {

}

const CHOICES = ['ROCK', 'PAPER', 'SCISSORS']

let computerSelection = getComputerChoice();
let playerSelection = getPlayerChoice();


//console.log(computerSelection); //verify computerSelection is running correctly
//console.log(playerSelection); //veriffy playSelection is running correctly