
function game() {

    //play 1 round with playerSelection based on event target
    function playRound(e) {
        let playerSelection = e.target.id.toUpperCase();
        let computerSelection = CHOICES[Math.floor(Math.random()*CHOICES.length)];
        let currentScore;

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
            alert("There was an error. Please try again")
            round--;
        }

        currentScore = `The score is Player: ${playerScore} Computer: ${computerScore}`;
        round++;
        updateScoreboard();

        if(playerScore >= 5) {
            updateScoreboard();
            setTimeout(() => alert("Congratulations! you win! " + currentScore));
            setTimeout(() => resetGame());
        } else if(computerScore >= 5) {
            updateScoreboard();
            setTimeout(() => alert("Sorry! you lose! " + currentScore));
            setTimeout(() => resetGame());
        }
    }

    function updateScoreboard() {
        const divRound = document.getElementById("round");
        const divPlayer = document.getElementById("player");
        const divComputer = document.getElementById("computer");
        const divResult = document.getElementById("result");

        divRound.textContent = round;
        divPlayer.textContent = playerScore;
        divComputer.textContent = computerScore;
        divResult.textContent = roundOutcome;
    }

    function resetGame() {
        round = 1;
        playerScore = 0;
        computerScore = 0;
        roundOutcome = "Make a selection to start the game!"
        updateScoreboard();
    }

    const CHOICES = ['ROCK', 'PAPER', 'SCISSORS'];

    const btnRock = document.querySelector("#rock");
    const btnPaper = document.querySelector("#paper");
    const btnScissors = document.querySelector("#scissors");
    
    let round = 1;
    let roundOutcome;
    let playerScore = 0;
    let computerScore = 0;


    // Add click event listeners to buttons
    btnRock.addEventListener("click", (e) => playRound(e));

    btnPaper.addEventListener("click", (e) => playRound(e));

    btnScissors.addEventListener("click", (e) => playRound(e));
    
}

game();