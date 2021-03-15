let playerSelection = "";
let computerSelection = "";
let output = "";
let playerScore = 0;
let computerScore = 0;
let buttons = document.querySelectorAll('button');
let readout = document.querySelector('div.readout>p');
let score1 = document.querySelector('#score1');
let score2 = document.querySelector('#score2');
let reset = document.querySelector('div.reset>button');

reset.addEventListener('click', () => {
    newGame();
});

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.id;
        computerSelection = computerPlay().toLowerCase();
        output = playRound(playerSelection, computerSelection);
        readout.textContent = output;
        score1.textContent = playerScore;
        score2.textContent = computerScore;
        game();
    });
});

function computerPlay() {
    let num = Math.floor(Math.random() * 3);
    if (num < 1) {
        return "Rock";
    } else if (num < 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
            return "It's a tie!"
        } else if (playerSelection == "rock" && computerSelection == "paper"){
            computerScore ++;
            return "Paper beats rock. You Lose!"
        } else if (playerSelection == "paper" && computerSelection == "scissors"){
            computerScore ++;
            return "Scissors beat Paper. You Lose!"
        } else if (playerSelection == "scissors" && computerSelection == "rock"){
            computerScore ++;
            return "Rock beats Scissors. You Lose!"
        } else if (playerSelection == "paper" && computerSelection == "rock"){
            playerScore ++;
            return "Paper beats rock. You Win!"
        } else if (playerSelection == "scissors" && computerSelection == "paper"){
            playerScore ++;
            return "Scissors beat Paper. You Win!"
        } else if (playerSelection == "rock" && computerSelection == "scissors"){
            playerScore ++;
            return "Rock beats Scissors. You Win!"
        } 
}

function game() {
   
    if (playerScore == 3) {
        readout.textContent = ("You win " + playerScore + " to " + computerScore + "!")
        disable();
    } else if (computerScore == 3) {
        readout.textContent = ("You lose " + computerScore + " to " + playerScore + "!")
        disable();
    }
}

function disable() {
    buttons.forEach((button) => { button.disabled = true; })
    reset.disabled = false;
}

function newGame() {
        location.reload(true);
}