//  computer randomly chooses between rock, paper, and scissors.
//      computer chooses random number up to 3 (math.random * 3)
//      each number (1,2,3) represents one item
function getComputerChoice(){
    let computerNumber = Math.floor(Math.random()*3)+1;
    switch(computerNumber){
        case 1: return "Rock";
        case 2: return "Paper";
        case 3: return "Scissors";
    }
}

//we get the player's choice and the computer's choice
//there are at least 7 outcomes, 3 for player, 3 for computer, and a draw
//if player gets the winning choice, output winner
//if computer gets the winning choice, output loser
//if draw, output draw
//explain why winner, loser, or draw
function rounds(player, computer){
    computer=getComputerChoice();
    console.log(player,computer);
    if(player==computer)
        roundDesc.textContent = `A Draw! You both chose ${player}!`;
    else{
        switch(player){
            case "Rock":
                if(computer=="Scissors"){
                    roundDesc.textContent = `You won! ${player} beats ${computer}!`;
                    playerScore++;
                } else {
                    roundDesc.textContent = `You lost! ${computer} beats ${player}!`;
                    computerScore++;
                }
                break;
            case "Scissors":
                if(computer=="Paper"){
                    roundDesc.textContent = `You won! ${player} beats ${computer}!`;
                    playerScore++;
                } else {
                    roundDesc.textContent = `You lost! ${computer} beats ${player}!`;
                    computerScore++;
                }
                break;
            case "Paper":
                if(computer=="Rock"){
                    roundDesc.textContent = `You won! ${player} beats ${computer}!`;
                    playerScore++;
                } else {
                    roundDesc.textContent = `You lost! ${computer} beats ${player}!`;
                    computerScore++;
                }
                break;
        }
    }
}

//figures out who wins in total
function winnerCheck(playerScore,computerScore){
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
    if(playerScore == 5){
        roundDesc.textContent = "And the winner is YOU!";
        refresh();
    } else if (computerScore == 5){
        roundDesc.textContent = "And the winner is the COMPUTER!";
        refresh();
    } else
        return;
}

// so that players don't need to refresh to restart
// enables buttons, refreshes values
function refresh(){
    const refresh = document.createElement("button");
    refresh.textContent = "Play Again?";
    refresh.addEventListener('click', () => {
        playerScore=0;
        computerScore=0;
        rockBtn.disabled = false;
        paperBtn.disabled = false;
        scissorsBtn.disabled = false;
        playerDisp.textContent = playerScore;
        computerDisp.textContent = computerScore;
        body.removeChild(refresh);
        roundDesc.textContent = "And another game begins.";
    });
    body.appendChild(refresh);
}

//couldn't find a way to make everything a button does into one function.
let playerSelection='';
const playerDisp = document.querySelector("#playerDisp");
const computerDisp = document.querySelector('#computerDisp');
const roundDesc = document.querySelector("#description");
const body = document.querySelector("body");

let playerScore = 0;
let computerScore = 0;

let rockBtn = document.querySelector('#rock');
rockBtn.addEventListener('click', () => {
    playerSelection="Rock";
    rounds(playerSelection,);
    playerDisp.textContent = playerScore;
    computerDisp.textContent = computerScore;
    if(playerScore == 5 || computerScore == 5)
        winnerCheck(playerScore, computerScore);
})

let paperBtn = document.querySelector('#paper');
paperBtn.addEventListener('click', () => {
    playerSelection="Paper";
    rounds(playerSelection,);
    playerDisp.textContent = playerScore;
    computerDisp.textContent = computerScore;
    if(playerScore == 5 || computerScore == 5)
        winnerCheck(playerScore, computerScore);
})

let scissorsBtn = document.querySelector('#scissors');
scissorsBtn.addEventListener('click', () => {
    playerSelection="Scissors";
    rounds(playerSelection,);
    playerDisp.textContent = playerScore;
    computerDisp.textContent = computerScore;
    if(playerScore == 5 || computerScore == 5)
        winnerCheck(playerScore, computerScore);
})

alert("Welcome to Rock, Paper, Scissors! Click OK to continue.")