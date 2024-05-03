
function game() {

    function getComputerChoice() {
        let computerChoice = Math.floor(Math.random()*CHOICES.length);

        return CHOICES[computerChoice];
    }

    function playRound(playerSelection, computerSelection) {
        //0 is error, 1 for win, 2 for lose, 3 for a tie
        if(playerSelection == computerSelection) {
            roundOutcome = 'You Tied. ';
        } else if(playerSelection == 'ROCK' && computerSelection == 'PAPER') {
            computerScore++;
            roundOutcome = `You lose. ${computerSelection} beats ${playerSelection}\. `;
        } else if(playerSelection == 'ROCK' && computerSelection == 'SCISSORS') {
            playerScore++;
            roundOutcome = `You WIN! ${playerSelection} beats ${computerSelection}\! `;
        } else if(playerSelection == 'PAPER' && computerSelection == 'SCISSORS') {
            computerScore++;
            roundOutcome = `You lose. ${computerSelection} beats ${playerSelection}\. `;
        } else if(playerSelection == 'PAPER' && computerSelection == 'ROCK') {
            playerScore++;
            roundOutcome = `You WIN! ${playerSelection} beats ${computerSelection}\! `;
        } else if(playerSelection == 'SCISSORS' && computerSelection == 'ROCK') {
            computerScore++;
            roundOutcome = `You lose. ${computerSelection} beats ${playerSelection}\. `;
        } else if(playerSelection == 'SCISSORS' && computerSelection == 'PAPER') {
            playerScore++;
            roundOutcome = `You WIN! ${playerSelection} beats ${computerSelection}\! `;
        } else {
            roundResult = 0;
        }

        currentScore = `The score is Player: ${playerScore} Computer: ${computerScore}`;
        console.log(roundOutcome + currentScore);
        round++;
    }

    const CHOICES = ['ROCK', 'PAPER', 'SCISSORS'];

    const btnRock = document.querySelector("#rock");
    const btnPaper = document.querySelector("#paper");
    const btnScissors = document.querySelector("#scissors");
    
    let computerSelection;
    let playerSelection;
    let round = 1;
    let roundResult;
    let roundOutcome;
    let playerScore = 0;
    let computerScore = 0;
    let currentScore;

    // Add click event listeners to buttons
    btnRock.addEventListener("click", () => {
        playerSelection = "ROCK";
        computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection); 
    });

    btnPaper.addEventListener("click", () => {
        playerSelection = "PAPER";
        computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection); 
    });

    btnScissors.addEventListener("click", () => {
        playerSelection = "SCISSORS";
        computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection); 
    });

    







    //Once 5 rounds are completed, alert player of result
/*     if(playerScore > computerScore) {
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
*/
    
}

//result of the game 0 is error, 1 is win, 2 is lose, 3 is tie
console.log(game());