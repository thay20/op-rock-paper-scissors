
function game() {

    function getComputerChoice() {
        let computerChoice = Math.floor(Math.random()*CHOICES.length);

        return CHOICES[computerChoice];
    }

    function getPlayerChoice() {
        let playerChoice = prompt('Will you choose Rock, Paper, or Scissors?').toUpperCase();

        return playerChoice;
    }

    function playRound(playerSelection, computerSelection) {
        //0 is error, 1 for win, 2 for lose, 3 for a tie
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

    const CHOICES = ['ROCK', 'PAPER', 'SCISSORS']

    let computerSelection;
    let playerSelection;
    let playerScore = 0;
    let computerScore = 0;
    let result;
    let currentScore;

    //play 5 rounds of playRound()
    for (let i = 0; i < 5; i++) {
        
        computerSelection = getComputerChoice();
        playerSelection = getPlayerChoice();

        //play a round, update the score, display results each round
        switch(playRound(playerSelection, computerSelection)){
            case 3: //Tie
                result = 'You Tied. ';
                break;
            case 1: //Win
                playerScore++;
                result = `You WIN! ${playerSelection} beats ${computerSelection}\! `;
                break;
            case 2: //Lose
                computerScore++;
                result = `You lose. ${computerSelection} beats ${playerSelection}\. `;
                break;
            case 0: //Error
                i--;
                result = 'Invalid Selection: Try Again. ';
                break;
        }

        //set current score to display the new score. Do it after switch or it ignores the last round update
        currentScore = `The score is Player: ${playerScore} Computer: ${computerScore}`;
        console.log(result + currentScore);
    }



    //Once 5 rounds are completed, alert player of result
    if(playerScore > computerScore) {
        alert('Awesome! You won the game! ' + currentScore);
        return 1;
    } else if(playerScore < computerScore) {
        alert('Too Bad. You lost the game. ' + currentScore);
        return 2;
    } else if(playerScore == computerScore){
        alert('Hotdoggonit! You managed to tie this game! ' + currentScore);
        return 3;
    } else {
        console.log('Oops! Something went wrong!')
        return 0;
    }
    
    
}

//result of the game 0 is error, 1 is win, 2 is lose, 3 is tie
console.log(game());